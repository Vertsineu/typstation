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

// Pre-built base list and lowercase lookup — built once at module load
interface SymCompletionItemInternal extends SymCompletionItem {
  _lc: string // lowercase label, avoids repeated toLowerCase
}

const symBaseItems: SymCompletionItemInternal[] = Object.values(symbolByName).map((symbol) => ({
  label: symbol.name,
  apply: toCompletionInsertText(symbol.name),
  detail: symbol.char,
  _lc: symbol.name.toLowerCase(),
}))

const sortByLength = (a: SymCompletionItemInternal, b: SymCompletionItemInternal) =>
  a.label.length - b.label.length || a.label.localeCompare(b.label)

const MAX_RESULTS = 100

// Cache results per query to avoid re-filtering on repeated keystrokes
const symQueryCache = new Map<string, SymCompletionItem[]>()

export function getSymCompletionItems(query: string): SymCompletionItem[] {
  const normalizedQuery = query.trim().toLowerCase()

  if (symQueryCache.has(normalizedQuery)) {
    return symQueryCache.get(normalizedQuery)!
  }

  if (!normalizedQuery) {
    return symBaseItems
  }

  const prefixMatches: SymCompletionItemInternal[] = []
  const containsMatches: SymCompletionItemInternal[] = []

  for (const item of symBaseItems) {
    const lc = item._lc
    if (lc.startsWith(normalizedQuery)) {
      prefixMatches.push(item)
      if (prefixMatches.length >= MAX_RESULTS) break
    } else if (lc.includes(normalizedQuery)) {
      containsMatches.push(item)
    }
  }

  prefixMatches.sort(sortByLength)
  containsMatches.sort(sortByLength)

  const result = [
    ...prefixMatches,
    ...containsMatches.slice(0, MAX_RESULTS - prefixMatches.length),
  ]

  symQueryCache.set(normalizedQuery, result)
  return result
}

export function isOfficialSymReference(text: string): boolean {
  return Object.hasOwn(symbolByName, text)
}
