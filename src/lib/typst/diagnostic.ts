interface SourceDiagnostic {
  message: string
  hints: string[]
}

export interface TypstErrorViewModel {
  summary: string
  html: string
}

function decodeQuotedContent(value: string): string {
  return value
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function withInlineCode(value: string): string {
  return escapeHtml(value).replace(/`([^`]+)`/g, '<code class="diag-code">$1</code>')
}

function parseSourceDiagnostic(raw: string): SourceDiagnostic | null {
  const messageMatch = raw.match(/message:\s*"((?:\\"|[^"])*)"/)
  const hintsMatch = raw.match(/hints:\s*\[((?:.|\n)*?)\]/)

  if (!messageMatch && !hintsMatch) return null

  const message = messageMatch
    ? decodeQuotedContent(messageMatch[1]).trim()
    : 'Unknown error'

  const hints = hintsMatch
    ? Array.from(
        hintsMatch[1].matchAll(/"((?:\\"|[^"])*)"/g),
        (match) => decodeQuotedContent(match[1]).trim()
      ).filter(Boolean)
    : []

  return { message, hints }
}

function summaryOf(raw: string): string {
  const parsed = parseSourceDiagnostic(raw)
  const firstLine = parsed?.message || raw.split('\n').find((line) => line.trim().length > 0) || raw
  return firstLine.length > 72 ? `${firstLine.slice(0, 69)}...` : firstLine
}

function fallbackHtml(raw: string): string {
  const lines = raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const title = '<div class="diag-title">Compiler Error</div>'
  const primary = `<p class="diag-message">${withInlineCode(lines[0] || raw)}</p>`

  if (lines.length <= 1) {
    return `<div class="diag-card">${title}${primary}</div>`
  }

  const detailItems = lines
    .slice(1)
    .map((line) => `<li>${withInlineCode(line)}</li>`)
    .join('')

  return `
    <div class="diag-card">
      ${title}
      ${primary}
      <div class="diag-section-title">Details</div>
      <ul class="diag-list">${detailItems}</ul>
    </div>
  `
}

function diagnosticHtml(parsed: SourceDiagnostic): string {
  const title = '<div class="diag-title">Compilation Error</div>'
  const message = `<p class="diag-message">${withInlineCode(parsed.message)}</p>`

  if (parsed.hints.length === 0) {
    return `<div class="diag-card">${title}${message}</div>`
  }

  const hints = parsed.hints.map((hint) => `<li>${withInlineCode(hint)}</li>`).join('')

  return `
    <div class="diag-card">
      ${title}
      ${message}
      <div class="diag-section-title">Hints</div>
      <ul class="diag-list">${hints}</ul>
    </div>
  `
}

export function buildTypstErrorView(raw: string): TypstErrorViewModel {
  const parsed = parseSourceDiagnostic(raw)
  return {
    summary: summaryOf(raw),
    html: parsed ? diagnosticHtml(parsed) : fallbackHtml(raw),
  }
}
