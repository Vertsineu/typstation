import { TypstSnippet } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs'
import { createTypstRenderer } from '@myriaddreamin/typst.ts/dist/esm/renderer.mjs'
import { createGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs'
import { createGlobalRenderer } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-renderer.mjs'
import { preloadFontAssets } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs'
import { buildTypstIconDocument } from '../lib/typst/document.ts'
import type { ThemePreference } from '../lib/theme.ts'

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

// WASM binaries loaded from jsDelivr CDN — no local copy needed
const COMPILER_WASM = new URL('https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler@0.7.0-rc2/pkg/typst_ts_web_compiler_bg.wasm')
const RENDERER_WASM = new URL('https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer@0.7.0-rc2/pkg/typst_ts_renderer_bg.wasm')

let $typst: TypstSnippet | null = null
let initPromise: Promise<void> | null = null

async function init() {
  $typst = new TypstSnippet({
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
}

self.onmessage = async (event: MessageEvent<IconRenderPayload>) => {
  const { id, code, theme, size } = event.data

  if (!initPromise) {
    initPromise = init()
  }
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
}
