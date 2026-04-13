import type { ThemePreference } from '../theme.ts'
import type {
  IconRenderPayload,
  IconRenderResult,
} from '../../workers/typst-icon.worker.ts'

class TypstIconRenderer {
  private worker: Worker
  private cache = new Map<string, Promise<string>>()
  private pending = new Map<string, { resolve: (svg: string) => void; reject: (error: Error) => void }>()
  private nextId = 0

  constructor() {
    this.worker = new Worker(
      new URL('../../workers/typst-icon.worker.ts', import.meta.url),
      { type: 'module' },
    )

    this.worker.onmessage = (event: MessageEvent<IconRenderResult>) => {
      const pending = this.pending.get(event.data.id)
      if (!pending) return

      this.pending.delete(event.data.id)

      if (event.data.svg) {
        pending.resolve(event.data.svg)
        return
      }

      pending.reject(new Error(event.data.error ?? 'Failed to render Typst icon'))
    }

    this.worker.onerror = (event) => {
      const error = new Error(event.message || 'Typst icon worker error')
      for (const { reject } of this.pending.values()) {
        reject(error)
      }
      this.pending.clear()
      this.cache.clear()
    }
  }

  render(code: string, theme: ThemePreference, size: number): Promise<string> {
    const key = `${theme}:${size}:${code}`
    const cached = this.cache.get(key)
    if (cached) {
      return cached
    }

    const id = `icon-${this.nextId++}`
    const promise = new Promise<string>((resolve, reject) => {
      this.pending.set(id, { resolve, reject })
      const payload: IconRenderPayload = { id, code, theme, size }
      this.worker.postMessage(payload)
    }).catch((error: Error) => {
      this.cache.delete(key)
      throw error
    })

    this.cache.set(key, promise)
    return promise
  }
}

let renderer: TypstIconRenderer | null = null

function getRenderer(): TypstIconRenderer {
  if (!renderer) {
    renderer = new TypstIconRenderer()
  }
  return renderer
}

export function renderTypstIcon(
  code: string,
  theme: ThemePreference,
  size: number,
): Promise<string> {
  return getRenderer().render(code, theme, size)
}
