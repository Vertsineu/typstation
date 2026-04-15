// WASM CDN URLs — @latest resolves to the newest published version on jsDelivr.
// jsDelivr caches the resolved version at the CDN edge, so "latest" does not
// mean an uncached request on every page load.

const CDN = 'https://unpkg.com'

export const COMPILER_WASM_URL =
  `${CDN}/@myriaddreamin/typst-ts-web-compiler@latest/pkg/typst_ts_web_compiler_bg.wasm`

export const RENDERER_WASM_URL =
  `${CDN}/@myriaddreamin/typst-ts-renderer@latest/pkg/typst_ts_renderer_bg.wasm`
