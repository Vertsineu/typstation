import { EditorSelection } from '@codemirror/state'
import type { EditorView } from '@codemirror/view'

export const DEFAULT_TAB_SPACES = 2
export const MIN_TAB_SPACES = 1
export const MAX_TAB_SPACES = 8

export function normalizeTabSpaces(value: number): number {
  if (!Number.isFinite(value)) {
    return DEFAULT_TAB_SPACES
  }

  return Math.min(MAX_TAB_SPACES, Math.max(MIN_TAB_SPACES, Math.round(value)))
}

export function getSoftTabText(tabSpaces: number): string {
  return ' '.repeat(normalizeTabSpaces(tabSpaces))
}

export function insertSoftTab(view: EditorView, tabSpaces: number): boolean {
  const text = getSoftTabText(tabSpaces)
  const transaction = view.state.changeByRange((range) => ({
    changes: { from: range.from, to: range.to, insert: text },
    range: EditorSelection.cursor(range.from + text.length),
  }))

  view.dispatch(view.state.update(transaction, {
    scrollIntoView: true,
    userEvent: 'input',
  }))

  return true
}
