import { useCallback, useEffect, useRef, useState } from 'react'
import { TypstEditor } from './components/Editor/TypstEditor'
import { Preview } from './components/Preview/Preview'
import { Toolbar } from './components/Toolbar/Toolbar'
import { SymbolPicker } from './components/SymbolPicker/SymbolPicker'
import { ExportPanel } from './components/ExportPanel/ExportPanel'
import { useEditorStore } from './store/editor'
import { scheduleCompile, warmupCompiler } from './lib/typst/compiler'
import {
  applyThemePreference,
  persistThemePreference,
  readStoredThemePreference,
  type ThemePreference,
} from './lib/theme'

export default function App() {
  const {
    code, fontSize, mathMode,
    setCode, setSvg, setError, setRenderState, setFontSize, setMathMode,
  } = useEditorStore()
  const [theme, setTheme] = useState<ThemePreference>(() => readStoredThemePreference())

  const svgRef  = useRef<HTMLDivElement>(null)
  const insertRef = useRef<((text: string) => void) | null>(null)
  const compileRequestRef = useRef(0)

  const handleInsert = useCallback((text: string) => {
    insertRef.current?.(text)
  }, [])

  const handleRegisterInsert = useCallback((fn: (text: string) => void) => {
    insertRef.current = fn
  }, [])

  useEffect(() => {
    applyThemePreference(theme)
    persistThemePreference(theme)
  }, [theme])

  useEffect(() => {
    void warmupCompiler().catch(() => undefined)
  }, [])

  useEffect(() => {
    const requestId = ++compileRequestRef.current

    if (!code.trim()) {
      setSvg('')
      setRenderState('ready')
      return
    }

    setRenderState('compiling')
    scheduleCompile({ code, fontSize, mathMode, theme }, (result) => {
      if (requestId !== compileRequestRef.current) return

      if (result.svg) {
        setSvg(result.svg)
        setRenderState('ready')
      } else if (result.error) {
        setError(result.error)
        setRenderState('error')
      }
    })
  }, [code, fontSize, mathMode, theme, setSvg, setError, setRenderState])

  return (
    <div className="app-shell">
      <div className="page-frame">
        {/* ── Header ── */}
        <header className="site-header">
          <div className="site-brand">
            <div className="site-logo">Typstation</div>
            <div className="site-kicker">Online Typst Equation Editor</div>
          </div>

          <div className="ctrl-row">
            <label className="ctrl-label">
              <input
                type="checkbox"
                className="toggle"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              />
              {theme} theme
            </label>

            <label className="ctrl-label">
              <input
                type="checkbox"
                className="toggle"
                checked={mathMode}
                onChange={(e) => setMathMode(e.target.checked)}
              />
              math mode
            </label>

            <label className="ctrl-label">
              <input
                type="range"
                className="size-slider"
                min={10}
                max={48}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
              <span className="size-val">{fontSize}pt</span>
            </label>
          </div>
        </header>

        {/* ── Split panes ── */}
        <div className="pane-split">
          {/* Top: editor */}
          <section className="pane-left">
            <div className="pane-label">
              <span className="pane-label-text">input</span>
            </div>

            <Toolbar onInsert={handleInsert} theme={theme} />

            <SymbolPicker onInsert={handleInsert} theme={theme} />

            <div className="editor-flex">
              <TypstEditor
                value={code}
                onChange={setCode}
                onInsert={handleRegisterInsert}
              />
            </div>
          </section>

          {/* Bottom: preview */}
          <section className="pane-right">
            <div className="pane-label">
              <span className="pane-label-text">preview</span>
            </div>

            <Preview svgRef={svgRef} />

            <ExportPanel />
          </section>
        </div>
      </div>

      <footer className="site-footer" aria-label="Acknowledgements">
        <span>
          Powered by{' '}
          <a href="https://github.com/Myriad-Dreamin/typst.ts" target="_blank" rel="noopener noreferrer">
            typst.ts
          </a>
        </span>
        <span>
          Official editor:{' '}
          <a href="https://typst.app" target="_blank" rel="noopener noreferrer">
            typst.app
          </a>
        </span>
        <span>
          Documentation:{' '}
          <a href="https://typst.app/docs/" target="_blank" rel="noopener noreferrer">
            typst.app/docs
          </a>
        </span>
      </footer>
    </div>
  )
}
