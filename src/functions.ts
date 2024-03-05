import { useState } from 'react';

type EzState<T> = {
  (newValue?: T): T;
  set: React.Dispatch<React.SetStateAction<T>>;
};

export function easyState<T>(initialValue: T): EzState<T> {
  const [state, setState] = useState<T>(initialValue);

  const ezStateFunction: EzState<T> = (newValue?: T) => {
    if (newValue !== undefined) {
      setState(newValue);
    }

    return state;
  };

  ezStateFunction.set = setState;

  return ezStateFunction;
}
