import { useEffect, useState } from 'react'
import { renderTypstIcon } from '../../lib/typst/icon-renderer'
import type { ThemePreference } from '../../lib/theme'

interface TypstIconProps {
  code: string
  theme: ThemePreference
  size: number
  className?: string
  fallback?: string
}

export function TypstIcon({
  code,
  theme,
  size,
  className = '',
  fallback,
}: TypstIconProps) {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    let cancelled = false

    renderTypstIcon(code, theme, size)
      .then((nextSvg) => {
        if (!cancelled) {
          setSvg(nextSvg)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSvg('')
        }
      })

    return () => {
      cancelled = true
    }
  }, [code, size, theme])

  if (!svg) {
    return <span className={`typst-icon-fallback ${className}`}>{fallback ?? ''}</span>
  }

  return (
    <span
      className={`typst-icon ${className}`.trim()}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
