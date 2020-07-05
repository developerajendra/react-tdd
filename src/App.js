import React from 'react';

import './App.css';
import ToDo from './todo/todo';

function App() {
  return (
    <div className="App">
     <header data-test="header"> <h1>React TDD - To-Do app</h1></header>
     <div className="todo">
     <ToDo/>
     </div>
    </div>
  );
}
export default App;
