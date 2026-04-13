import {
  EditorView,
  keymap,
  placeholder,
} from '@codemirror/view'
import { defaultKeymap, historyKeymap, history } from '@codemirror/commands'
import { searchKeymap } from '@codemirror/search'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { createTypstLanguageExtensions } from '../../lib/typst/editor-language'

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
  },
  { dark: false }
)

export const typstExtensions = [
  history(),
  ...createTypstLanguageExtensions(),
  typstTheme,
  placeholder('Type a Typst formula here.'),
  closeBrackets(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...historyKeymap,
    ...searchKeymap,
  ]),
  EditorView.lineWrapping,
]
