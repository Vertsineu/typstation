import {
  autocompletion,
  type CompletionContext,
  type CompletionResult,
} from '@codemirror/autocomplete'
import { HighlightStyle, StreamLanguage, syntaxHighlighting } from '@codemirror/language'
import type { Extension } from '@codemirror/state'
import { tags } from '@lezer/highlight'
import {
  getMathCompletionItems,
  isOfficialMathReference,
} from './math-support.ts'
import {
  getSymCompletionItems,
  isOfficialSymReference,
} from './sym-support.ts'

const typstKeywordPattern =
  /^#(?:let|set|show|if|else|for|while|import|include|return|break|continue|context)\b/

function createSymCompletionResult() {
  return (context: CompletionContext): CompletionResult | null => {
    const word = context.matchBefore(/(?:(?:sym|math)\.)?[A-Za-z][A-Za-z0-9.]*/)
    if (!word && !context.explicit) {
      return null
    }

    const from = word?.from ?? context.pos
    const rawText = word?.text ?? ''
    const symQuery = rawText.startsWith('sym.')
      ? rawText.slice(4)
      : rawText
    const mathQuery = rawText.startsWith('math.')
      ? rawText.slice(5)
      : rawText

    const items = rawText.startsWith('sym.')
      ? getSymCompletionItems(symQuery)
      : rawText.startsWith('math.')
        ? getMathCompletionItems(mathQuery)
        : [...getSymCompletionItems(symQuery), ...getMathCompletionItems(mathQuery)]

    // Items are already sorted by sym/math-support; no re-sort needed here
    const options = items.map((item) => ({
      label: item.label,
      apply: item.apply,
      detail: item.detail,
      type: 'variable' as const,
    }))

    return {
      from,
      options,
      validFor: /(?:(?:sym|math)\.)?[A-Za-z][A-Za-z0-9.]*/,
    }
  }
}

function createTypstStreamLanguage() {
  return StreamLanguage.define<{
    depth: number
    inBlockComment: boolean
  }>({
    name: 'typst-math',
    startState: () => ({ depth: 0, inBlockComment: false }),
    token(stream, state) {
      const nextChar = stream.peek()

      if (state.inBlockComment) {
        while (!stream.eol()) {
          if (stream.match('*/')) {
            state.inBlockComment = false
            break
          }
          stream.next()
        }
        return 'blockComment'
      }

      if (stream.match('//')) {
        stream.skipToEnd()
        return 'lineComment'
      }

      if (stream.match('/*')) {
        state.inBlockComment = true

        while (!stream.eol()) {
          if (stream.match('*/')) {
            state.inBlockComment = false
            break
          }
          stream.next()
        }
        return 'blockComment'
      }

      if (stream.match('"')) {
        let escaped = false

        while (!stream.eol()) {
          const char = stream.next()
          if (char === '"' && !escaped) break
          escaped = char === '\\' && !escaped
        }

        return 'string'
      }

      if (stream.match(typstKeywordPattern)) {
        return 'keyword'
      }

      if (stream.match(/^[A-Za-z][A-Za-z0-9._]*/)) {
        const ident = stream.current()
        if (isOfficialSymReference(ident) || isOfficialMathReference(ident)) {
          return 'atom'
        }
        return 'variableName'
      }

      if (stream.match(/^[0-9]+(\.[0-9]+)?/)) {
        return 'number'
      }

      if (nextChar && '([{'.includes(nextChar)) {
        stream.next()
        state.depth += 1
        return 'bracket'
      }

      if (nextChar && ')]}'.includes(nextChar)) {
        stream.next()
        state.depth = Math.max(0, state.depth - 1)
        return 'bracket'
      }

      if (stream.match(/^[+\-*/=<>!&|^~_^,;:]/)) {
        return 'operator'
      }

      if (stream.match(/^#\w*/)) {
        return 'keyword'
      }

      stream.next()
      return null
    },
  })
}

const typstHighlightStyle = HighlightStyle.define([
  { tag: tags.variableName, color: 'var(--syntax-ident)' },
  { tag: tags.number, color: 'var(--syntax-number)' },
  { tag: tags.string, color: 'var(--syntax-string)' },
  { tag: tags.operator, color: 'var(--syntax-operator)' },
  { tag: tags.keyword, color: 'var(--syntax-operator)' },
  { tag: tags.bracket, color: 'var(--syntax-bracket)' },
  { tag: tags.atom, color: 'var(--accent-light)' },
  { tag: [tags.lineComment, tags.blockComment], color: 'var(--syntax-comment)', fontStyle: 'italic' },
])

export function createTypstLanguageExtensions(): Extension[] {
  return [
    createTypstStreamLanguage(),
    syntaxHighlighting(typstHighlightStyle),
    autocompletion({
      override: [createSymCompletionResult()],
      maxRenderedOptions: 80,
      activateOnTypingDelay: 80,
    }),
  ]
}
