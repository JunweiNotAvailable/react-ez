import React from "react"
import { InputProps, TextAreaProps } from "./types"

// Easy input
export const Input: React.FC<InputProps<string | number>> = ({ state, setState, ...props }) => {
  if (typeof state === 'string') {
    return <input value={state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)} {...props} />
  } else if (typeof state === 'number') {
    return <input value={state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(Number(e.target.value) || state)} {...props} />
  }
}
// Easy textarea
export const TextArea: React.FC<TextAreaProps> = ({ state, setState, ...props }) => {
  if (!state) return <textarea {...props} />

  return <textarea value={state} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setState(e.target.value)} {...props} />
}