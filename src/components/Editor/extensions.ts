import {
  EditorView,
  keymap,
  placeholder,
} from '@codemirror/view'
import { EditorState, type Extension } from '@codemirror/state'
import {
  defaultKeymap,
  historyKeymap,
  history,
  indentLess,
} from '@codemirror/commands'
import { searchKeymap } from '@codemirror/search'
import { acceptCompletion, closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { insertSoftTab, normalizeTabSpaces } from './tab-support'

const typstTheme = EditorView.theme(
  {
    '&': {
      backgroundColor: 'var(--bg-panel)',
      color: 'var(--text)',
      height: '100%',
      border: '1px solid var(--border-mid)',
      borderRadius: '8px',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.35)',
    },
    '.cm-content': {
      padding: '12px 12px 14px',
      caretColor: 'var(--accent-light)',
    },
    '.cm-scroller': {
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    },
    '.cm-cursor': {
      borderLeftColor: 'var(--accent-light)',
    },
    '.cm-selectionBackground': {
      backgroundColor: 'var(--accent-bg) !important',
    },
    '&.cm-focused .cm-selectionBackground': {
      backgroundColor: 'var(--accent-bg) !important',
    },
    '&.cm-focused': {
      borderColor: 'var(--accent-light)',
      boxShadow: '0 0 0 3px var(--accent-bg)',
    },
    '.cm-matchingBracket': {
      backgroundColor: 'var(--accent-bg)',
      outline: '1px solid var(--accent-border)',
    },
    '.cm-placeholder': {
      color: 'var(--text-3)',
      fontStyle: 'italic',
    },
    '.cm-tooltip': {
      backgroundColor: 'var(--bg-panel)',
      border: '1px solid var(--border-mid)',
      borderRadius: '6px',
      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.18)',
      color: 'var(--text)',
    },
    '.cm-completionList': {
      padding: '2px 0',
    },
    '.cm-completionItem': {
      padding: '3px 10px',
      borderLeft: '2px solid transparent',
    },
    '.cm-completionItem:hover': {
      backgroundColor: 'var(--bg-hover)',
    },
    '.cm-completionItem[aria-selected]': {
      backgroundColor: 'var(--accent-bg)',
      borderLeftColor: 'var(--accent-light)',
      color: 'var(--text-em)',
    },
    '.cm-completionDetail': {
      color: 'var(--text-3)',
      fontSize: '11px',
    },
    '.cm-completionMatchedText': {
      fontWeight: '600',
      color: 'var(--accent-light)',
      textDecoration: 'none',
    },
  },
  { dark: false }
)

export const typstBaseExtensions: Extension[] = [
  history(),
  typstTheme,
  placeholder('Type a Typst formula here.'),
  closeBrackets(),
  EditorView.lineWrapping,
]

export function createEditorTabExtensions(tabSpaces: number): Extension[] {
  const normalizedTabSpaces = normalizeTabSpaces(tabSpaces)

  return [
    EditorState.tabSize.of(normalizedTabSpaces),
    keymap.of([
      {
        key: 'Tab',
        run: (view) => acceptCompletion(view) || insertSoftTab(view, normalizedTabSpaces),
        shift: indentLess,
      },
      ...closeBracketsKeymap,
      ...defaultKeymap,
      ...historyKeymap,
      ...searchKeymap,
    ]),
  ]
}
