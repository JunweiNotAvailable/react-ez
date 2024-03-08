# @iwbam/react-ez

A utility library for React that provides easy-to-use hooks and components to simplify common tasks.

## Usage
Custom hook:
```jsx
import React from 'react';
import { useEventListner } from '@iwbam/react-ez';

function App() {

  // useEventListner replace adding event listner in a useEffect hook
  useEventListner('click', () => {
    console.log('Click event detected!')
  });

  return (
    <div>App</div>
  );
};

export default App;
```
Custom component:
```jsx
return (
  <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
)

// Custom input create clean code
return (
  <Input state={inputValue} setState={setInputValue} />
)
```