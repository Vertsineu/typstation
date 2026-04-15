import { create } from 'zustand'

export type RenderState = 'idle' | 'compiling' | 'ready' | 'error'

interface EditorStore {
  code: string
  svg: string
  error: string
  renderState: RenderState
  wasmReady: boolean
  fontSize: number
  tabSpaces: number
  mathMode: boolean
  setCode: (code: string) => void
  setSvg: (svg: string) => void
  setError: (err: string) => void
  setRenderState: (s: RenderState) => void
  setWasmReady: (v: boolean) => void
  setFontSize: (n: number) => void
  setTabSpaces: (n: number) => void
  setMathMode: (v: boolean) => void
}

// Read initial code from URL hash
function getInitialCode(): string {
  try {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const params = new URLSearchParams(hash)
      const code = params.get('code')
      if (code) return atob(code)
    }
  } catch {
    // ignore
  }
  return ''
}

export const useEditorStore = create<EditorStore>((set) => ({
  code: getInitialCode(),
  svg: '',
  error: '',
  renderState: 'idle',
  wasmReady: false,
  fontSize: 24,
  tabSpaces: 2,
  mathMode: true,
  setCode: (code) => set({ code }),
  setSvg: (svg) => set({ svg, error: '' }),
  setError: (error) => set({ error, svg: '' }),
  setRenderState: (renderState) => set({ renderState }),
  setWasmReady: (wasmReady) => set({ wasmReady }),
  setFontSize: (fontSize) => set({ fontSize }),
  setTabSpaces: (tabSpaces) => set({ tabSpaces }),
  setMathMode: (mathMode) => set({ mathMode }),
}))
