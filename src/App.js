import React from 'react'
import 'w3-css/w3.css';
import './App.css';
import Todos from './todos';

function App() {

  return (
    <div className="w3-container wrapper">
      <header >
        <h1>Lovely Todo App</h1>
      </header>
      <Todos />
    </div>
  );
}

export default App;
