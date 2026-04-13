import type { ThemePreference } from '../theme.ts'

const TEXT_FILL_BY_THEME: Record<ThemePreference, string> = {
  light: '#1f2937',
  dark: '#f8fafc',
}

function getThemeFill(theme: ThemePreference): string {
  return TEXT_FILL_BY_THEME[theme]
}

export function buildTypstDocument(
  code: string,
  fontSize: number,
  mathMode: boolean,
  theme: ThemePreference,
): string {
  const body = mathMode
    ? `$
${code}
$`
    : code

  return `#set page(width: auto, height: auto, margin: 8pt, fill: none)
#set text(size: ${fontSize}pt, fill: rgb("${getThemeFill(theme)}"))
${body}`
}

export function buildTypstIconDocument(
  code: string,
  theme: ThemePreference,
  size: number,
): string {
  return `#set page(width: auto, height: auto, margin: 0pt, fill: none)
#set text(size: ${size}pt, fill: rgb("${getThemeFill(theme)}"))
$${code}$`
}
