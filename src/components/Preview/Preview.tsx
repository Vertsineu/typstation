import { useRef, useState, useEffect, useMemo } from 'react'
import { useEditorStore } from '../../store/editor'
import { buildTypstErrorView } from '../../lib/typst/diagnostic'

interface Props {
  svgRef?: React.RefObject<HTMLDivElement | null>
}

export function Preview({ svgRef }: Props) {
  const { svg, error, renderState, wasmReady } = useEditorStore()
  const innerRef  = useRef<HTMLDivElement>(null)
  const containerRef = svgRef ?? innerRef
  const errorView = useMemo(() => (error ? buildTypstErrorView(error) : null), [error])

  const [showPopover, setShowPopover] = useState(false)

  // Close on outside click
  useEffect(() => {
    if (!showPopover) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Element
      if (!target.closest('.err-pill') && !target.closest('.err-popover')) {
        setShowPopover(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showPopover])

  const dot =
    !wasmReady              ? 'loading' :
    renderState === 'error'     ? 'err'  :
    renderState === 'compiling' ? 'busy' :
    renderState === 'ready'     ? 'ok'   : ''

  const statusText =
    !wasmReady              ? 'loading WASM…' :
    renderState === 'compiling' ? 'compiling'   :
    renderState === 'ready'     ? 'ready'       :
    renderState === 'idle'      ? 'initializing…' : ''

  return (
    <>
      {/* Checkerboard preview */}
      <div className="preview-area">
        <div className="preview-inner">
          {svg && !error ? (
            <div
              ref={containerRef}
              className="preview-svg"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : (
            !error && (
              <span className="preview-placeholder">
                {!wasmReady
                  ? 'loading WASM…'
                  : renderState === 'idle'
                    ? 'initializing compiler…'
                    : 'enter a Typst formula to see the preview'}
              </span>
            )
          )}
        </div>
      </div>

      {/* Status bar */}
      <div className="status-bar preview-status-bar">
        <span className={`status-dot${dot ? ` ${dot}` : ''}`} />
        <span>{statusText}</span>

        {error && (
          <>
            <button
              type="button"
              className="err-pill"
              onClick={() => setShowPopover((v) => !v)}
              title="Click to see full error"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="4.5" stroke="currentColor" strokeWidth="1"/>
                <line x1="5" y1="3" x2="5" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="5" cy="7.2" r="0.6" fill="currentColor"/>
              </svg>
              {errorView?.summary}
            </button>

            {showPopover && errorView && (
              <div
                className="err-popover"
                dangerouslySetInnerHTML={{ __html: errorView.html }}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}
