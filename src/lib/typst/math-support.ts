import { allMathEntries, mathByName, type TypstMathKind } from './math-data.ts'

export interface MathCompletionItem {
  label: string
  apply: string
  detail: string
}

function mathCompletionDetail(kind: TypstMathKind): string {
  switch (kind) {
    case 'element':
      return 'math element'
    case 'function':
      return 'math function'
    case 'operator':
      return 'math operator'
  }
}

// Pre-built base list with lowercase cache — built once at module load
interface MathCompletionItemInternal extends MathCompletionItem {
  _lc: string
}

const mathBaseItems: MathCompletionItemInternal[] = allMathEntries.map((entry) => ({
  label: entry.name,
  apply: entry.name,
  detail: mathCompletionDetail(entry.kind),
  _lc: entry.name.toLowerCase(),
}))

const sortByLength = (a: MathCompletionItemInternal, b: MathCompletionItemInternal) =>
  a.label.length - b.label.length || a.label.localeCompare(b.label)

const MAX_RESULTS = 100

const mathQueryCache = new Map<string, MathCompletionItem[]>()

export function getMathCompletionItems(query: string): MathCompletionItem[] {
  const normalizedQuery = query.trim().toLowerCase()

  if (mathQueryCache.has(normalizedQuery)) {
    return mathQueryCache.get(normalizedQuery)!
  }

  if (!normalizedQuery) {
    return mathBaseItems
  }

  const prefixMatches: MathCompletionItemInternal[] = []
  const containsMatches: MathCompletionItemInternal[] = []

  for (const item of mathBaseItems) {
    const lc = item._lc
    if (lc.startsWith(normalizedQuery)) {
      prefixMatches.push(item)
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

  mathQueryCache.set(normalizedQuery, result)
  return result
}

export function isOfficialMathReference(text: string): boolean {
  return Object.hasOwn(mathByName, text)
}
