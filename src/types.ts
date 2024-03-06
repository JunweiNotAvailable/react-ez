import React from "react";

// Custom types

// State
export type EasyState<T> = {
  value: T;       
  set: React.Dispatch<React.SetStateAction<T>>;
};

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
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  state?: EasyState<string> | EasyState<number> | EasyState<undefined>
}
// Textarea
export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  state?: EasyState<string>
}