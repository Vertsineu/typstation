import { TypstSnippet } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import { createTypstCompiler } from '@myriaddreamin/typst.ts/dist/esm/compiler.mjs'
import { createTypstRenderer } from '@myriaddreamin/typst.ts/dist/esm/renderer.mjs'
import { createGlobalCompiler } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-compiler.mjs'
import { createGlobalRenderer } from '@myriaddreamin/typst.ts/dist/esm/contrib/global-renderer.mjs'
import { preloadFontAssets } from '@myriaddreamin/typst.ts/dist/esm/options.init.mjs'
import { buildTypstDocument } from '../typst/document.ts'

export interface FormulaExportOptions {
  code: string
  fontSize: number
  mathMode: boolean
}

// WASM binaries loaded from jsDelivr CDN — same as the worker threads
const COMPILER_WASM = new URL('https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler@0.7.0-rc2/pkg/typst_ts_web_compiler_bg.wasm')
const RENDERER_WASM = new URL('https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer@0.7.0-rc2/pkg/typst_ts_renderer_bg.wasm')

let exportTypst: TypstSnippet | null = null

function getExportSnippet(): TypstSnippet {
  if (exportTypst) {
    return exportTypst
  }

  exportTypst = new TypstSnippet({
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

  return exportTypst
}

function buildExportDocument(options: FormulaExportOptions): string {
  return buildTypstDocument(
    options.code,
    options.fontSize,
    options.mathMode,
    'light',
  )
}

async function renderSvgBlob(options: FormulaExportOptions): Promise<Blob> {
  const svg = await getExportSnippet().svg({
    mainContent: buildExportDocument(options),
  })
  return new Blob(
    ['<?xml version="1.0" encoding="utf-8"?>\n' + svg],
    { type: 'image/svg+xml' },
  )
}

async function renderPngBlob(options: FormulaExportOptions, scale: number): Promise<Blob> {
  const container = createExportContainer()
  try {
    await getExportSnippet().canvas(container, {
      mainContent: buildExportDocument(options),
      pixelPerPt: scale,
      backgroundColor: '#ffffff',
    })
    const canvas = container.querySelector('canvas')
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Typst canvas export did not produce a canvas element')
    }
    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, 'image/png')
    })
    if (!blob) throw new Error('Canvas export did not produce a PNG blob')
    return blob
  } finally {
    container.remove()
  }
}

export async function exportSvg(options: FormulaExportOptions): Promise<void> {
  if (!options.code.trim()) return
  download(await renderSvgBlob(options), `formula_${timestamp()}.svg`)
}

export async function exportPng(options: FormulaExportOptions, scale = 3): Promise<void> {
  if (!options.code.trim()) return
  download(await renderPngBlob(options, scale), `formula_${timestamp()}.png`)
}

export async function copySvgToClipboard(options: FormulaExportOptions): Promise<void> {
  if (!options.code.trim()) return
  const blob = await renderSvgBlob(options)
  try {
    await navigator.clipboard.write([new ClipboardItem({ 'image/svg+xml': blob })])
  } catch {
    // Fallback: write SVG source as plain text (Firefox / older browsers)
    await navigator.clipboard.writeText(await blob.text())
  }
}

export async function copyPngToClipboard(options: FormulaExportOptions, scale = 3): Promise<void> {
  if (!options.code.trim()) return
  const blob = await renderPngBlob(options, scale)
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
}

function createExportContainer(): HTMLDivElement {
  const container = document.createElement('div')
  container.style.position = 'fixed'
  container.style.left = '-10000px'
  container.style.top = '0'
  container.style.width = '1200px'
  container.style.opacity = '0'
  container.style.pointerEvents = 'none'
  container.style.background = '#ffffff'
  document.body.appendChild(container)
  return container
}

function timestamp(): string {
  const d = new Date()
  const pad = (n: number, len = 2) => String(n).padStart(len, '0')
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
