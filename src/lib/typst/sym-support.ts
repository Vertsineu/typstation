import { allSymbols, symbolByName } from './sym-data.ts'
import { typstMathShorthandByChar } from './sym-shortcuts.ts'

export interface SymCompletionItem {
  label: string
  apply: string
  detail: string
}

const preferredTypstShortcuts: Record<string, string> = Object.fromEntries(
  allSymbols.flatMap((symbol) => {
    const shortcut = typstMathShorthandByChar[symbol.char]
    return shortcut ? [[symbol.name, shortcut]] : []
  }),
)

export function toCompletionInsertText(name: string): string {
  return name
}

export function preferTypstShortcut(text: string): string {
  return preferredTypstShortcuts[text] ?? text
}

export function getSymCompletionItems(
  query: string,
): SymCompletionItem[] {
  const normalizedQuery = query.trim().toLowerCase()
  const items = Object.values(symbolByName).map((symbol) => ({
    label: symbol.name,
    apply: toCompletionInsertText(symbol.name),
    detail: symbol.char,
  }))

  if (!normalizedQuery) {
    return items
  }

  const prefixMatches: SymCompletionItem[] = []
  const containsMatches: SymCompletionItem[] = []

  for (const item of items) {
    const label = item.label.toLowerCase()
    if (label.startsWith(normalizedQuery)) {
      prefixMatches.push(item)
      continue
    }

    if (label.includes(normalizedQuery)) {
      containsMatches.push(item)
    }
  }

  const sortItems = (left: SymCompletionItem, right: SymCompletionItem) =>
    left.label.length - right.label.length || left.label.localeCompare(right.label)

  prefixMatches.sort(sortItems)
  containsMatches.sort(sortItems)

  return [...prefixMatches, ...containsMatches]
}

export function isOfficialSymReference(text: string): boolean {
  return Object.hasOwn(symbolByName, text)
}
