import { TypstSnippet } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs'
import { createTypstRenderer } from '@myriaddreamin/typst.ts/dist/esm/renderer.mjs'
import { createGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs'
import { createGlobalRenderer } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-renderer.mjs'
import { preloadFontAssets } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs'
import type { ThemePreference } from '../lib/theme.ts'
import { buildTypstDocument } from '../lib/typst/document.ts'

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

// WASM binaries loaded from jsDelivr CDN — no local copy needed
const COMPILER_WASM = new URL('https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler@0.7.0-rc2/pkg/typst_ts_web_compiler_bg.wasm')
const RENDERER_WASM = new URL('https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer@0.7.0-rc2/pkg/typst_ts_renderer_bg.wasm')

let $typst: TypstSnippet | null = null
let initPromise: Promise<void> | null = null

async function init() {
  const snippet = new TypstSnippet({
    compiler: () =>
      createGlobalCompiler(createTypstCompiler, {
        beforeBuild: [preloadFontAssets({ assets: ['text'] })],
        getModule: () => ({ module_or_path: COMPILER_WASM }),
      }),
    renderer: () =>
      createGlobalRenderer(createTypstRenderer, {
        beforeBuild: [],
        getModule: () => ({ module_or_path: RENDERER_WASM }),
      }),
  })
  $typst = snippet
}

// Serial queue — prevents concurrent WASM calls on the same instance
let taskQueue = Promise.resolve()

self.onmessage = (e: MessageEvent<WorkerRequest>) => {
  taskQueue = taskQueue.then(async () => {
    if (!initPromise) initPromise = init()
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
