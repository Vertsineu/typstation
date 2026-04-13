import { useState } from 'react'
import { exportPng, exportSvg } from '../../lib/export'
import { useEditorStore } from '../../store/editor'

export function ExportPanel() {
  const { code, svg, error, fontSize, mathMode } = useEditorStore()
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)
  const hasCode = code.trim().length > 0
  const canExport = hasCode && svg.length > 0 && !error
  const exportOptions = {
    code,
    fontSize,
    mathMode,
  }

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleShare = () => {
    const encoded = btoa(code)
    const param = encodeURIComponent(encoded)
    const url = `${location.origin}${location.pathname}#code=${param}`
    navigator.clipboard.writeText(url)
    history.replaceState(null, '', `#code=${param}`)
    setShared(true)
    setTimeout(() => setShared(false), 1500)
  }

  return (
    <div className="export-bar">
      <span className="export-label">Export</span>

      <button type="button" className="exp-btn" title="Copy Typst code" onClick={handleCopyCode}>
        {copied ? '✓ copied' : '{ } copy code'}
      </button>

      <button
        type="button"
        className="exp-btn"
        title={canExport ? 'Download SVG' : 'Enter a formula to export'}
        onClick={() => exportSvg(exportOptions)}
        disabled={!canExport}
      >
        ↓ SVG
      </button>

      <button
        type="button"
        className="exp-btn"
        title={canExport ? 'Download PNG (3×)' : 'Enter a formula to export'}
        onClick={() => exportPng(exportOptions, 3)}
        disabled={!canExport}
      >
        ↓ PNG
      </button>

      <div className="flex-spacer" />

      <button type="button" className="exp-btn primary" title="Copy shareable link" onClick={handleShare}>
        {shared ? '✓ link copied!' : '⟨/⟩ share'}
      </button>
    </div>
  )
}
