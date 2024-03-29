import { useEffect, useRef, useState } from 'react';
import { EventHandler, ToggleState } from './types';

// Toggle states
export function useToggle(initialState: boolean): ToggleState {
  const [value, setValue] = useState(initialState);
  const toggle = () => setValue(prevState => !prevState);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}

// Event handler
export function useEventListener<T extends keyof DocumentEventMap>(
  eventName: T,
  eventHandler: EventHandler<DocumentEventMap[T]>,
  deps?: React.DependencyList | undefined
): void {
  useEffect(() => {
    const handleEvent = (event: Event) => {
      eventHandler(event as DocumentEventMap[T]);
    };
    document.addEventListener(eventName, handleEvent);
    return () => document.removeEventListener(eventName, handleEvent);
  }, deps);
}

// Interval
export function useInterval(callback: () => void, ms?: number | undefined): void {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timerRef.current = setInterval(callback, ms);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [callback, ms]);
};

// Timeout
export function useTimeout(callback: () => void, delay: number): void {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timerRef.current = setTimeout(callback, delay);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [callback, delay]);
};

// Use async function in useEffect
export function useAsyncEffect(asyncEffect: () => Promise<void>, deps?: React.DependencyList | undefined): void {
  useEffect(() => {
    const cleanup = async () => {
      try {
        await asyncEffect();
      } catch (error) {
        console.error('Error during asynchronous effect:', error);
      }
    };
    cleanup();
    return () => {};
  }, deps);
}