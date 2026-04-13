import { useState, memo } from 'react'
import { SYMBOL_CATEGORIES } from '../../lib/symbols'
import { TypstIcon } from '../TypstIcon/TypstIcon'
import type { ThemePreference } from '../../lib/theme'

export const SymbolPicker = memo(function SymbolPicker({
  onInsert,
  theme,
}: {
  onInsert: (t: string) => void
  theme: ThemePreference
}) {
  const [active, setActive] = useState(SYMBOL_CATEGORIES[0].name)
  const cat = SYMBOL_CATEGORIES.find((c) => c.name === active)!

  return (
    <div className="symbol-bar">
      <div className="cat-tabs">
        {SYMBOL_CATEGORIES.map((c) => (
          <button
            key={c.name}
            type="button"
            className={`cat-tab${active === c.name ? ' active' : ''}`}
            onClick={() => setActive(c.name)}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="sym-grid">
        {cat.symbols.map((s) => (
          <button
            key={s.title}
            type="button"
            title={`${s.title} → ${s.insert}`}
            aria-label={s.title}
            className="sym-btn"
            onClick={() => onInsert(s.insert)}
          >
            <TypstIcon
              code={s.icon ?? s.insert}
              theme={theme}
              size={12}
              className="sym-icon"
              fallback={s.label}
            />
          </button>
        ))}
      </div>
    </div>
  )
})
