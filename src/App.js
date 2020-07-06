import React from 'react';

import './App.css';
import ToDo from './todo/todo';
import ComponentA from './context/ComponentA';

import Number from './peformance/memoAndUseCallback/Parent';
import Ref from './useRef/Ref';
import UserForm from './customHoocks/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserForm />
      <Ref/>
      <Number/>
      <UserContext.Provider value={'Rajendra'}>
        <ChannelContext.Provider value={'prasad'}>
            <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
     <header data-test="header"> <h1>React TDD - To-Do app</h1></header>
     <div className="todo">
     <ToDo/>
     </div>
    </div>
  );
}
export default App;
