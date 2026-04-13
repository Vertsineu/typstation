import type {
  CompileRequest,
  CompileResult,
  WorkerResponse,
} from '../../workers/typst.worker'

type Callback = (result: CompileResult) => void

class TypstWorkerClient {
  private worker: Worker
  private pending:
    | {
        kind: 'init'
        resolve: () => void
        reject: (reason?: unknown) => void
      }
    | {
        kind: 'compile'
        resolve: Callback
      }
    | null = null
  private warmupPromise: Promise<void> | null = null

  constructor() {
    this.worker = new Worker(
      new URL('../../workers/typst.worker.ts', import.meta.url),
      { type: 'module' }
    )
    this.worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
      if (!this.pending) return

      if (e.data.type === 'init' && this.pending.kind === 'init') {
        this.pending.resolve()
        this.pending = null
        return
      }

      if (e.data.type === 'compile' && this.pending.kind === 'compile') {
        this.pending.resolve(e.data.result)
        this.pending = null
      }
    }
    this.worker.onerror = (e) => {
      if (!this.pending) return

      if (this.pending.kind === 'init') {
        this.pending.reject(new Error(e.message))
      } else {
        this.pending.resolve({ error: e.message })
      }
      this.pending = null
    }
  }

  warmup(): Promise<void> {
    if (this.warmupPromise) return this.warmupPromise

    this.warmupPromise = new Promise<void>((resolve, reject) => {
      this.pending = { kind: 'init', resolve, reject }
      this.worker.postMessage({ type: 'init' })
    })

    return this.warmupPromise
  }

  async compile(req: CompileRequest): Promise<CompileResult> {
    await this.warmup()

    return new Promise((resolve) => {
      this.pending = { kind: 'compile', resolve }
      this.worker.postMessage({ type: 'compile', request: req })
    })
  }
}

let client: TypstWorkerClient | null = null

function getClient(): TypstWorkerClient {
  if (!client) client = new TypstWorkerClient()
  return client
}

export function warmupCompiler(): Promise<void> {
  return getClient().warmup()
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null
let compiling = false
let queued: CompileRequest | null = null

export function scheduleCompile(
  req: CompileRequest,
  onResult: (r: CompileResult) => void,
  delay = req.code.trim() ? 120 : 0
) {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(async () => {
    if (compiling) {
      queued = req
      return
    }
    compiling = true
    const result = await getClient()
      .compile(req)
      .catch((error: unknown) => ({
        error: error instanceof Error ? error.message : String(error),
      }))
    compiling = false
    onResult(result)
    if (queued) {
      const next = queued
      queued = null
      scheduleCompile(next, onResult, 0)
    }
  }, delay)
}
