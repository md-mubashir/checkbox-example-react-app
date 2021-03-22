import React from 'react';
import Hobby from './components/Hobby';
import './App.css'

function App() {
  return (
    <div className="App">
    <div className="navbar navbar-dark  bg-dark navbar-expand-sm">
      <a href="/" className="navbar-brand">Checkbox Example..</a>
    </div>

    <Hobby />
    </div>
  );
}

export default App;

