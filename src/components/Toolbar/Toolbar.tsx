import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { TypstIcon } from '../TypstIcon/TypstIcon'
import type { ThemePreference } from '../../lib/theme'
import { MatrixPicker } from './MatrixPicker'
import { buildMatrix } from './matrixUtils'

interface Btn { label: string; title: string; insert: string; icon: string }

type OpenDialog = 'mat' | 'cases' | 'vec' | null

// ── Button groups ──────────────────────────────────────────────

const BASIC: Btn[] = [
  { label: 'x/y',  title: 'Fraction',    insert: 'x / y',      icon: 'x / y' },
  { label: '√x',   title: 'Square root', insert: 'sqrt(x)',     icon: 'sqrt(x)' },
  { label: 'ⁿ√x',  title: 'nth root',    insert: 'root(n, x)',  icon: 'root(n, x)' },
  { label: 'xⁿ',   title: 'Superscript', insert: 'x^n',        icon: 'x^n' },
  { label: 'xₙ',   title: 'Subscript',   insert: 'x_n',        icon: 'x_n' },
]

const BIGOP: Btn[] = [
  { label: 'Σ',   title: 'Sum',              insert: 'sum_(i=1)^(n) x_i',         icon: 'sum_(i=1)^n' },
  { label: '∏',   title: 'Product',          insert: 'product_(i=1)^(n) x_i',     icon: 'product_(i=1)^n' },
  { label: '∫',   title: 'Integral',         insert: 'integral_a^b f(x) dif x',   icon: 'integral_a^b' },
  { label: '∬',   title: 'Double integral',  insert: 'integral.double_D f dif A', icon: 'integral.double_D' },
  { label: '∭',   title: 'Triple integral',  insert: 'integral.triple_V f dif V', icon: 'integral.triple_V' },
  { label: '∮',   title: 'Contour integral', insert: 'integral.cont_C f dif z',   icon: 'integral.cont_C' },
  { label: 'lim', title: 'Limit',            insert: 'lim_(x -> infinity)',        icon: 'lim_(x -> infinity)' },
]

const BRACKET: Btn[] = [
  { label: '|x|',   title: 'Absolute value',       insert: 'abs(x)',             icon: 'abs(x)' },
  { label: '‖x‖',   title: 'Norm',                 insert: 'norm(x)',            icon: 'norm(x)' },
  { label: '⟨x⟩',   title: 'Inner product',        insert: 'angle.l x angle.r', icon: 'angle.l x angle.r' },
  { label: '⌊x⌋',   title: 'Floor',                insert: 'floor(x)',           icon: 'floor(x)' },
  { label: '⌈x⌉',   title: 'Ceiling',              insert: 'ceil(x)',            icon: 'ceil(x)' },
  { label: 'C(n,k)', title: 'Binomial coefficient', insert: 'binom(n, k)',        icon: 'binom(n, k)' },
]

const ACCENT: Btn[] = [
  { label: 'x̂',  title: 'Hat accent',    insert: 'hat(x)',                 icon: 'hat(x)' },
  { label: 'x̄',  title: 'Overline',      insert: 'overline(x)',            icon: 'overline(x)' },
  { label: 'x̃',  title: 'Tilde',         insert: 'tilde(x)',               icon: 'tilde(x)' },
  { label: 'ẋ',  title: 'Dot accent',    insert: 'dot(x)',                 icon: 'dot(x)' },
  { label: 'ẍ',  title: 'Double dot',    insert: 'dot.double(x)',          icon: 'dot.double(x)' },
  { label: '⏞',  title: 'Overbrace',     insert: 'overbrace(x + y, n)',  icon: 'overbrace(x + y, n)' },
  { label: '⏟',  title: 'Underbrace',    insert: 'underbrace(x + y, n)', icon: 'underbrace(x + y, n)' },
]

const FONT: Btn[] = [
  { label: 'bold', title: 'Bold',            insert: 'bold(x)',    icon: 'bold(x)' },
  { label: 'rm',   title: 'Upright (roman)', insert: 'upright(x)', icon: 'upright(A)' },
  { label: 'cal',  title: 'Calligraphic',    insert: 'cal(L)',     icon: 'cal(L)' },
]

const TRIG: Btn[] = [
  { label: 'sin',    title: 'Sine',       insert: 'sin(x)',       icon: 'sin' },
  { label: 'cos',    title: 'Cosine',     insert: 'cos(x)',       icon: 'cos' },
  { label: 'tan',    title: 'Tangent',    insert: 'tan(x)',       icon: 'tan' },
  { label: 'arcsin', title: 'Arcsine',    insert: 'arcsin(x)',    icon: 'arcsin' },
  { label: 'arccos', title: 'Arccosine',  insert: 'arccos(x)',    icon: 'arccos' },
  { label: 'arctan', title: 'Arctangent', insert: 'arctan(x)',    icon: 'arctan' },
]

const CALC: Btn[] = [
  { label: 'd/dx', title: 'Derivative',          insert: '(dif f)/(dif x)',         icon: '(dif f)/(dif x)' },
  { label: '∂/∂x', title: 'Partial derivative',  insert: '(partial f)/(partial x)', icon: '(partial f)/(partial x)' },
  { label: 'Aᵀ',   title: 'Transpose',           insert: 'A^top',                   icon: 'A^top' },
  { label: 'A⁻¹',  title: 'Inverse',             insert: 'A^(-1)',                  icon: 'A^(-1)' },
  { label: 'A†',   title: 'Conjugate transpose',  insert: 'A^dagger',               icon: 'A^dagger' },
]

// ── Helpers ────────────────────────────────────────────────────

function buildCases(n: number): string {
  const vals = 'abcdef'
  const lines = Array.from({ length: n }, (_, i) =>
    `f_${i + 1}(x) = ${vals[i] ?? i + 1}`
  )
  return `cases(${lines.join(', ')})`
}

function buildVec(n: number): string {
  const entries = Array.from({ length: n }, (_, i) => String.fromCharCode(97 + i))
  return `vec(${entries.join(', ')})`
}

// ── Sub-components ─────────────────────────────────────────────

function TbBtn({ btn, theme, onInsert }: { btn: Btn; theme: ThemePreference; onInsert: (t: string) => void }) {
  return (
    <button
      type="button"
      title={btn.title}
      aria-label={btn.title}
      className="tb-btn"
      onClick={() => onInsert(btn.insert)}
    >
      <TypstIcon code={btn.icon} theme={theme} size={12} className="tb-icon" fallback={btn.label} />
    </button>
  )
}

function BtnGroup({ buttons, theme, onInsert }: { buttons: Btn[]; theme: ThemePreference; onInsert: (t: string) => void }) {
  return (
    <div className="tb-group">
      {buttons.map(b => <TbBtn key={b.title} btn={b} theme={theme} onInsert={onInsert} />)}
    </div>
  )
}

// ── Toolbar ────────────────────────────────────────────────────

export function Toolbar({
  onInsert,
  theme,
}: {
  onInsert: (t: string) => void
  theme: ThemePreference
}) {
  const [openDialog, setOpenDialog] = useState<OpenDialog>(null)
  const [anchor, setAnchor] = useState<DOMRect | null>(null)

  // Trigger button ref — excluded from the close handler so toggling works
  const triggerElemRef = useRef<HTMLElement | null>(null)

  // Ref callback: writes position as CSS custom properties so no style prop is needed in JSX
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const setDialogNode = useCallback((el: HTMLDivElement | null) => {
    dialogRef.current = el
    if (!el || !anchor) return
    el.style.setProperty('--tb-dialog-y', `${anchor.bottom + 5}px`)
    el.style.setProperty('--tb-dialog-x', `${Math.min(anchor.left, window.innerWidth - 180)}px`)
  }, [anchor])

  useEffect(() => {
    if (!openDialog) return
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (dialogRef.current?.contains(t)) return
      if (triggerElemRef.current?.contains(t)) return
      setOpenDialog(null)
    }
    // Defer so the triggering mousedown doesn't close immediately
    const id = setTimeout(() => document.addEventListener('mousedown', onDown), 0)
    return () => { clearTimeout(id); document.removeEventListener('mousedown', onDown) }
  }, [openDialog])

  const openFor = (which: OpenDialog, btn: HTMLElement) => {
    if (openDialog === which) { setOpenDialog(null); return }
    triggerElemRef.current = btn
    setAnchor(btn.getBoundingClientRect())
    setOpenDialog(which)
  }

  // Portal renders with position:fixed (via .tb-dialog-portal class) so it escapes
  // every overflow:hidden ancestor, including .page-frame.
  // Coordinates are written imperatively via setDialogNode to avoid any style prop.
  const dialogPortal = openDialog && anchor
    ? createPortal(
        <div
          ref={setDialogNode}
          className="tb-dialog-portal"
        >
          {openDialog === 'mat' && (
            <MatrixPicker
              onInsert={onInsert}
              onClose={() => setOpenDialog(null)}
            />
          )}
          {openDialog === 'cases' && (
            <div className="tb-dialog">
              <div className="tb-dialog-section">Number of cases</div>
              <div className="tb-cases-row">
                {[2, 3, 4, 5, 6].map(n => (
                  <button
                    key={n}
                    type="button"
                    className="tb-cases-btn"
                    onClick={() => { onInsert(buildCases(n)); setOpenDialog(null) }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}
          {openDialog === 'vec' && (
            <div className="tb-dialog">
              <div className="tb-dialog-section">Vector dimension</div>
              <div className="tb-cases-row">
                {[2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    className="tb-cases-btn"
                    onClick={() => { onInsert(buildVec(n)); setOpenDialog(null) }}
                  >
                    {n}D
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>,
        document.body,
      )
    : null

  return (
    <>
      {dialogPortal}

      <div className="toolbar">

        {/* ── Basic ── */}
        <BtnGroup buttons={BASIC} theme={theme} onInsert={onInsert} />
        <div className="tb-sep" />

        {/* ── Big operators ── */}
        <BtnGroup buttons={BIGOP} theme={theme} onInsert={onInsert} />
        <div className="tb-sep" />

        {/* ── Brackets & misc delimiters ── */}
        <BtnGroup buttons={BRACKET} theme={theme} onInsert={onInsert} />
        <div className="tb-sep" />

        {/* ── Structures with dialogs ── */}
        <div className="tb-group">

          <button
            type="button"
            title="Matrix (click to configure)"
            aria-label="Matrix"
            className={`tb-btn${openDialog === 'mat' ? ' tb-btn-active' : ''}`}
            onClick={e => openFor('mat', e.currentTarget)}
          >
            <TypstIcon code="mat(a, b; c, d)" theme={theme} size={12} className="tb-icon" fallback="mat" />
          </button>

          <button
            type="button"
            title="Determinant (2×2)"
            aria-label="Determinant"
            className="tb-btn"
            onClick={() => onInsert(buildMatrix(2, 2, '||'))}
          >
            <TypstIcon code='mat(delim: "|", a, b; c, d)' theme={theme} size={12} className="tb-icon" fallback="det" />
          </button>

          <button
            type="button"
            title="Cases / Piecewise (click to configure)"
            aria-label="Cases"
            className={`tb-btn${openDialog === 'cases' ? ' tb-btn-active' : ''}`}
            onClick={e => openFor('cases', e.currentTarget)}
          >
            <TypstIcon code="cases(x = 1, y = 2)" theme={theme} size={12} className="tb-icon" fallback="cases" />
          </button>

          <button
            type="button"
            title="Column vector (click to configure)"
            aria-label="Column vector"
            className={`tb-btn${openDialog === 'vec' ? ' tb-btn-active' : ''}`}
            onClick={e => openFor('vec', e.currentTarget)}
          >
            <TypstIcon code="vec(a, b)" theme={theme} size={12} className="tb-icon" fallback="vec" />
          </button>

        </div>
        <div className="tb-sep" />

        {/* ── Accents & decorators ── */}
        <BtnGroup buttons={ACCENT} theme={theme} onInsert={onInsert} />
        <div className="tb-sep" />

        {/* ── Fonts ── */}
        <BtnGroup buttons={FONT} theme={theme} onInsert={onInsert} />
        <div className="tb-sep" />

        {/* ── Trigonometry ── */}
        <BtnGroup buttons={TRIG} theme={theme} onInsert={onInsert} />
        <div className="tb-sep" />

        {/* ── Calculus / linear algebra ── */}
        <BtnGroup buttons={CALC} theme={theme} onInsert={onInsert} />

      </div>
    </>
  )
}
