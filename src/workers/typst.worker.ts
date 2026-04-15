import { TypstSnippet } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs'
import { createTypstRenderer } from '@myriaddreamin/typst.ts/dist/esm/renderer.mjs'
import { createGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs'
import { createGlobalRenderer } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-renderer.mjs'
import { preloadFontAssets } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs'
import type { ThemePreference } from '../lib/theme.ts'
import { buildTypstDocument } from '../lib/typst/document.ts'
import { COMPILER_WASM_URL, RENDERER_WASM_URL } from './wasm-urls.ts'
import { fetchWasmCached } from './wasm-cache.ts'

export interface CompileRequest {
  code: string
  fontSize: number
  mathMode: boolean
  theme: ThemePreference
}

export interface InitRequest {
  type: 'init'
}

export interface CompileMessage {
  type: 'compile'
  request: CompileRequest
}

export type WorkerRequest = InitRequest | CompileMessage

export interface CompileResult {
  svg?: string
  error?: string
}

export interface InitResult {
  ok: true
}

export interface CompileResponse {
  type: 'compile'
  result: CompileResult
}

export interface InitResponse {
  type: 'init'
  result: InitResult
}

export type WorkerResponse = CompileResponse | InitResponse

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
// download begins before the first compile request arrives.
const initPromise: Promise<void> = init()

// Serial queue — prevents concurrent WASM calls on the same instance
let taskQueue = Promise.resolve()

self.onmessage = (e: MessageEvent<WorkerRequest>) => {
  taskQueue = taskQueue.then(async () => {
    await initPromise

    if (e.data.type === 'init') {
      self.postMessage({ type: 'init', result: { ok: true } } satisfies InitResponse)
      return
    }

    const { code, fontSize, mathMode, theme } = e.data.request

    try {
      const mainContent = buildTypstDocument(code, fontSize, mathMode, theme)
      const svg = await $typst!.svg({ mainContent })
      self.postMessage({
        type: 'compile',
        result: { svg } satisfies CompileResult,
      } satisfies CompileResponse)
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : String(err)
      self.postMessage({
        type: 'compile',
        result: { error } satisfies CompileResult,
      } satisfies CompileResponse)
    }
  })
}
