export function buildMatrix(rows: number, cols: number, delim: string, tabSpaces = 2): string {
  const total = rows * cols
  const useLetters = total <= 9
  const indent = ' '.repeat(tabSpaces)
  let idx = 0
  const matrixRows = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) =>
      useLetters ? String.fromCharCode(97 + idx++) : `a_(${r + 1}${c + 1})`
    ).join(', ')
  )

  const body = matrixRows
    .map((row, index) => `${indent}${row}${index < matrixRows.length - 1 ? ';' : ''}`)
    .join('\n')

  switch (delim) {
    case 'none': return `mat(\n${indent}delim: #none,\n${body}\n)`
    case '()':   return `mat(\n${indent}delim: "(",\n${body}\n)`
    case '||':   return `mat(\n${indent}delim: "|",\n${body}\n)`
    case '‖‖':   return `mat(\n${indent}delim: "||",\n${body}\n)`
    default:     return `mat(\n${body}\n)`
  }
}
