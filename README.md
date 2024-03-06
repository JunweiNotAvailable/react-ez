# react-ez

A utility library for React that provides easy-to-use hooks and components to simplify common tasks.

## Usage
```jsx
import React from 'react';
import { useEventListner } from '@iwbam/react-ez';

function App() {

  useEventListner('click', () => {
    console.log('Click event detected!')
  });

  return (
    <div>App</div>
  );
};

export default App;
```
