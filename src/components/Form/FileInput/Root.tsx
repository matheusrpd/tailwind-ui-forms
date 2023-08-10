'use client'

import { ComponentProps, createContext, useContext, useState } from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  files: File[]
  onFilesSelected: (files: Array<File>, multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const [files, setFiles] = useState<Array<File>>([])

  function onFilesSelected(files: Array<File>, multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
