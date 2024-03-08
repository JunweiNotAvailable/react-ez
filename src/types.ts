import React from "react";

// Custom types

// Boolean state
export type ToggleState = {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export type EventHandler<T extends Event> = (event: T) => void;

// Extend interface

// Input
export interface InputProps<T extends string | number | undefined> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  state: T
  setState: React.Dispatch<T>
}
// Textarea
export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
}