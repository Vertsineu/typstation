# Typstation

Typstation is a browser-based Typst equation editor built with React + TypeScript.
It provides a fast edit-preview workflow for math formulas, with export and clipboard utilities.

## Highlights

- Live Typst preview while typing
- Web Worker-based compile pipeline to keep the UI responsive
- Formula export and clipboard support (SVG and PNG)
- Math symbol picker and matrix helpers
- Theme and editor preferences (font size, math mode)

## Architecture

Typstation is organized as a client-only React app with a clear separation between
UI concerns, app state, Typst integration, and worker execution.

### High-Level Layers

1. App Shell (`src/App.tsx`)
    - Wires editor, preview, toolbar, symbol picker, and export panel.
    - Owns compile trigger lifecycle and theme preference synchronization.
2. UI Components (`src/components`)
    - `Editor/TypstEditor.tsx`: CodeMirror editor instance and text insertion bridge.
    - `Preview/Preview.tsx`: SVG display, status indicator, and error popover.
    - `Toolbar/*` and `SymbolPicker/*`: formula building shortcuts and structure templates.
    - `ExportPanel/ExportPanel.tsx`: export, clipboard, and share-link actions.
    - `TypstIcon/TypstIcon.tsx`: async SVG icon rendering for toolbar/symbol buttons.
3. State Store (`src/store/editor.ts`)
   - Central Zustand store for `code`, `svg`, `error`, `renderState`, `fontSize`, and `mathMode`.
   - Parses initial source from URL hash (`#code=...`) for share-link hydration.
4. Typst Domain Layer (`src/lib/typst`)
    - `document.ts`: converts UI options to valid Typst source.
    - `compiler.ts`: worker client, warmup, debounce, and in-flight compile queue.
    - `diagnostic.ts`: parses compiler errors into a readable, structured HTML view model.
    - `icon-renderer.ts`: icon rendering service with promise cache per code/theme/size key.
    - `editor-language.ts`: CodeMirror language/highlight setup for Typst-like syntax.
5. Worker Runtime (`src/workers`)
    - `typst.worker.ts`: main equation compile worker.
    - `typst-icon.worker.ts`: lightweight icon render worker for button previews.
    - Both workers use `typst.ts` and serialize WASM work through internal queues.

## Build And Run

### Requirements

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Assets

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Optional: Copy WASM Files To `public/wasm`

The current worker setup loads WASM binaries from jsDelivr CDN by default.
If you want local static copies for custom deployment workflows, run:

```bash
npm run copy-wasm
```

## License

This project is licensed under the MIT License.
See the `LICENSE` file for details.
