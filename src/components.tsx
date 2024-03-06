import React from "react"
import { InputProps, TextAreaProps } from "./types"

// Easy input
export const Input: React.FC<InputProps> = ({ state, ...props }) => {
  if (!state) return <input {...props} />
  
  if (typeof state.value === 'string') {
    return <input value={state.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => state.set(e.target.value)} {...props} />
  } else if (typeof state.value === 'number') {
    return <input value={state.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => state.set(Number(e.target.value) || state.value)} {...props} />
  }
}
// Easy textarea
export const TextArea: React.FC<TextAreaProps> = ({ state, ...props }) => {
  if (!state) return <textarea {...props} />

  return <textarea value={state.value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => state.set(e.target.value)} {...props} />
}