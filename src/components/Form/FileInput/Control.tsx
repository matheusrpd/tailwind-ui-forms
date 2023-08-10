'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Contrtol({ multiple = false, ...props }: ControlProps) {
  const { onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      onChange={handleFilesSelected}
      multiple={multiple}
      className="sr-only"
      {...props}
    />
  )
}
