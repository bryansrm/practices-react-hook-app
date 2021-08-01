import React from 'react';
import ReactDOM from 'react-dom';
import { Padre } from './components/07-tarea-memo/Padre';

// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHooks';
// import { Memorize } from './components/06-memos/Memorize';
// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    <div className="container py-5">
      <Padre />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
