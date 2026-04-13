import { useState } from 'react'
import { buildMatrix } from './matrixUtils'

const MAX_ROWS = 6
const MAX_COLS = 6

const DELIMS = [
  { label: '[ ]', value: '[]' },
  { label: '( )', value: '()' },
  { label: '| |', value: '||' },
  { label: '‖ ‖', value: '‖‖' },
  { label: 'none', value: 'none' },
]

interface Props {
  onInsert: (code: string) => void
  onClose: () => void
}

export function MatrixPicker({ onInsert, onClose }: Props) {
  const [hoverRow, setHoverRow] = useState(0)
  const [hoverCol, setHoverCol] = useState(0)
  const [delim, setDelim] = useState('[]')

  const cells = Array.from({ length: MAX_ROWS * MAX_COLS }, (_, i) => ({
    r: Math.floor(i / MAX_COLS),
    c: i % MAX_COLS,
  }))

  return (
    <div className="tb-dialog" onClick={e => e.stopPropagation()}>
      <div className="tb-dialog-section">Matrix size</div>
      <div
        className="mat-size-grid"
        onMouseLeave={() => { setHoverRow(0); setHoverCol(0) }}
      >
        {cells.map(({ r, c }) => (
          <div
            key={`${r}-${c}`}
            className={`mat-cell${r < hoverRow && c < hoverCol ? ' active' : ''}`}
            onMouseEnter={() => { setHoverRow(r + 1); setHoverCol(c + 1) }}
            onClick={() => { onInsert(buildMatrix(r + 1, c + 1, delim)); onClose() }}
          />
        ))}
      </div>
      <div className="mat-size-label">
        {hoverRow > 0 && hoverCol > 0 ? `${hoverRow} × ${hoverCol}` : '\u00a0'}
      </div>

      <div className="tb-dialog-section">Delimiter</div>
      <div className="tb-delim-row">
        {DELIMS.map(d => (
          <button
            key={d.value}
            type="button"
            className={`tb-delim-btn${delim === d.value ? ' active' : ''}`}
            onClick={e => { e.stopPropagation(); setDelim(d.value) }}
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  )
}
