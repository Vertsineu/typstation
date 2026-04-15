import { TypstSnippet } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs'
import { createTypstRenderer } from '@myriaddreamin/typst.ts/dist/esm/renderer.mjs'
import { createGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs'
import { createGlobalRenderer } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-renderer.mjs'
import { preloadFontAssets } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs'
import { buildTypstIconDocument } from '../lib/typst/document.ts'
import type { ThemePreference } from '../lib/theme.ts'
import { COMPILER_WASM_URL, RENDERER_WASM_URL } from './wasm-urls.ts'
import { fetchWasmCached } from './wasm-cache.ts'

export interface IconRenderPayload {
  id: string
  code: string
  theme: ThemePreference
  size: number
}

export interface IconRenderResult {
  id: string
  svg?: string
  error?: string
}

let $typst: TypstSnippet | null = null

async function init() {
  // Fetch both WASM binaries in parallel; Cache Storage makes subsequent
  // page loads instant without re-downloading the multi-MB files.
  const [compilerWasm, rendererWasm] = await Promise.all([
    fetchWasmCached(COMPILER_WASM_URL),
    fetchWasmCached(RENDERER_WASM_URL),
  ])

  $typst = new TypstSnippet({
    compiler: () =>
      createGlobalCompiler(createTypstCompiler, {
        beforeBuild: [preloadFontAssets({ assets: ['text'] })],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getModule: () => ({ module_or_path: compilerWasm as any }),
      }),
    renderer: () =>
      createGlobalRenderer(createTypstRenderer, {
        beforeBuild: [],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getModule: () => ({ module_or_path: rendererWasm as any }),
      }),
  })
}

// Eagerly kick off WASM loading as soon as the worker starts — this way the
// download begins before the first render request arrives.
const initPromise: Promise<void> = init()

// Serial render queue — ensures only one WASM call runs at a time and
// yields between renders so the browser GC has breathing room.
let renderQueue = Promise.resolve()

function yield_(): Promise<void> {
  return new Promise((r) => setTimeout(r, 0))
}

self.onmessage = (event: MessageEvent<IconRenderPayload>) => {
  const { id, code, theme, size } = event.data

  renderQueue = renderQueue.then(async () => {
    await initPromise

    try {
      const mainContent = buildTypstIconDocument(code, theme, size)
      const svg = await $typst!.svg({ mainContent })
      self.postMessage({ id, svg } satisfies IconRenderResult)
    } catch (error: unknown) {
      self.postMessage({
        id,
        error: error instanceof Error ? error.message : String(error),
      } satisfies IconRenderResult)
    }

    // Yield between renders to relieve GC pressure on the main thread
    await yield_()
  })
}
