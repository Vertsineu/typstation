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

export function getMathCompletionItems(query: string): MathCompletionItem[] {
  const normalizedQuery = query.trim().toLowerCase()
  const items = allMathEntries.map((entry) => ({
    label: entry.name,
    apply: entry.name,
    detail: mathCompletionDetail(entry.kind),
  }))

  if (!normalizedQuery) {
    return items
  }

  const prefixMatches: MathCompletionItem[] = []
  const containsMatches: MathCompletionItem[] = []

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

  const sortItems = (left: MathCompletionItem, right: MathCompletionItem) =>
    left.label.length - right.label.length || left.label.localeCompare(right.label)

  prefixMatches.sort(sortItems)
  containsMatches.sort(sortItems)

  return [...prefixMatches, ...containsMatches]
}

export function isOfficialMathReference(text: string): boolean {
  return Object.hasOwn(mathByName, text)
}
