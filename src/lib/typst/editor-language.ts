import { HighlightStyle, StreamLanguage, syntaxHighlighting } from '@codemirror/language'
import type { Extension } from '@codemirror/state'
import { tags } from '@lezer/highlight'

export interface TypstCompletionItem {
  label: string
  apply?: string
  detail?: string
  info?: string
}

export function getTypstCompletionItems(): TypstCompletionItem[] {
  // Intentionally empty for now. This module owns future Typst completion logic
  // so the editor integration can stay unchanged when we expand it later.
  return []
}

const typstStreamLanguage = StreamLanguage.define<{ depth: number; inBlockComment: boolean }>({
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

    if (stream.match(/^#(?:let|set|show|if|else|for|while|import|include|return|break|continue|context)\b/)) {
      return 'keyword'
    }

    if (stream.match(/^[A-Za-z][A-Za-z0-9._]*/)) {
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

const typstHighlightStyle = HighlightStyle.define([
  { tag: tags.variableName, color: 'var(--syntax-ident)' },
  { tag: tags.number, color: 'var(--syntax-number)' },
  { tag: tags.string, color: 'var(--syntax-string)' },
  { tag: tags.operator, color: 'var(--syntax-operator)' },
  { tag: tags.keyword, color: 'var(--syntax-operator)' },
  { tag: tags.bracket, color: 'var(--syntax-bracket)' },
  { tag: [tags.lineComment, tags.blockComment], color: 'var(--syntax-comment)', fontStyle: 'italic' },
])

export function createTypstLanguageExtensions(): Extension[] {
  return [
    typstStreamLanguage,
    syntaxHighlighting(typstHighlightStyle),
  ]
}
