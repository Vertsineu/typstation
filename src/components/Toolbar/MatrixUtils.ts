export function buildMatrix(rows: number, cols: number, delim: string): string {
  const total = rows * cols
  const useLetters = total <= 9
  let idx = 0
  const body = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) =>
      useLetters ? String.fromCharCode(97 + idx++) : `a_(${r + 1}${c + 1})`
    ).join(', ')
  ).join('; ')

  switch (delim) {
    case 'none': return `mat(delim: #none, ${body})`
    case '()':   return `mat(delim: "(", ${body})`
    case '||':   return `mat(delim: "|", ${body})`
    case '‖‖':   return `mat(delim: "||", ${body})`
    default:     return `mat(${body})`
  }
}
