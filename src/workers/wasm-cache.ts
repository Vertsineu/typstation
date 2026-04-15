/**
 * Fetch a WASM binary with Cache Storage persistence.
 *
 * On the first load the binary is downloaded from the CDN and stored in the
 * browser's Cache Storage under CACHE_NAME (keyed by exact URL).  Subsequent
 * page loads return the cached bytes instantly, even across browser restarts,
 * without depending on the HTTP cache that browsers may evict under memory
 * pressure.
 *
 * The cache is versioned: if CACHE_NAME ever changes (e.g. after a breaking
 * WASM ABI bump), the old entry is simply ignored and a fresh download is
 * triggered.  Stale caches are NOT purged here — that can be handled by a
 * Service Worker cleanup routine if needed.
 *
 * Falls back to a plain fetch() in non-secure contexts where the Cache API is
 * unavailable (e.g. plain http:// during local development).
 */

const CACHE_NAME = 'typst-wasm-v1'

export async function fetchWasmCached(url: string): Promise<Response> {
  if (typeof caches === 'undefined') {
    return fetch(url)
  }

  const cache = await caches.open(CACHE_NAME)
  const hit = await cache.match(url)
  if (hit) return hit

  const response = await fetch(url)
  if (response.ok) {
    // clone() so the original body stream is still available for WASM instantiation
    await cache.put(url, response.clone())
  }
  return response
}
