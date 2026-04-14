import { useEffect, useRef, useCallback } from 'react'
import { EditorView } from '@codemirror/view'
import { Compartment, EditorState } from '@codemirror/state'
import { createEditorTabExtensions, typstBaseExtensions } from './extensions'
import { createTypstLanguageExtensions } from '../../lib/typst/editor-language'

interface Props {
  value: string
  tabSpaces: number
  onChange: (value: string) => void
  onInsert?: (fn: (text: string) => void) => void
}

export function TypstEditor({ value, tabSpaces, onChange, onInsert }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const tabBehaviorRef = useRef(new Compartment())

  const insert = useCallback((text: string) => {
    const view = viewRef.current
    if (!view) return
    const { from, to } = view.state.selection.main
    const previousChar = from > 0 ? view.state.doc.sliceString(from - 1, from) : ''
    const needsLeadingSpace = from > 0 && !/\s/.test(previousChar)
    const insertText = needsLeadingSpace ? ` ${text}` : text

    view.dispatch({
      changes: { from, to, insert: insertText },
      selection: { anchor: from + insertText.length },
    })
    view.focus()
  }, [])

  // Expose insert to parent
  useEffect(() => {
    onInsert?.(insert)
  }, [onInsert, insert])

  useEffect(() => {
    if (!containerRef.current) return

    const view = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: [
          ...createTypstLanguageExtensions(),
          ...typstBaseExtensions,
          tabBehaviorRef.current.of(createEditorTabExtensions(tabSpaces)),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              onChange(update.state.doc.toString())
            }
          }),
        ],
      }),
      parent: containerRef.current,
    })

    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const view = viewRef.current
    if (!view) return

    view.dispatch({
      effects: tabBehaviorRef.current.reconfigure(createEditorTabExtensions(tabSpaces)),
    })
  }, [tabSpaces])

  // Sync external value changes (e.g. from toolbar/symbol picker)
  useEffect(() => {
    const view = viewRef.current
    if (!view) return
    const current = view.state.doc.toString()
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      })
    }
  }, [value])

  return (
    <div
      ref={containerRef}
      className="typst-editor-shell h-full overflow-hidden"
    />
  )
}
