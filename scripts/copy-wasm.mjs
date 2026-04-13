// Copies WASM binaries from node_modules to public/wasm/ so they can be
// served as static assets and referenced by the Web Worker at runtime.
import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dest = resolve(root, 'public', 'wasm')

mkdirSync(dest, { recursive: true })

const files = [
  [
    'node_modules/@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
    'typst_ts_web_compiler_bg.wasm',
  ],
  [
    'node_modules/@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
    'typst_ts_renderer_bg.wasm',
  ],
]

for (const [src, name] of files) {
  const srcPath = resolve(root, src)
  const destPath = resolve(dest, name)
  if (!existsSync(srcPath)) {
    console.warn(`[copy-wasm] Source not found: ${srcPath}`)
    continue
  }
  copyFileSync(srcPath, destPath)
  console.log(`[copy-wasm] ${src} → public/wasm/${name}`)
}
