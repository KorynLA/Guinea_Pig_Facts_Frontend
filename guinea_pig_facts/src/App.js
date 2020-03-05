import React, {useState} from 'react';
import guinea_pig from './guinea_pig.png';
import './App.css';

function App() {
  return (
    <div className="home">
      <h1>Guinea Pig Facts Daily </h1>
      <img src={guinea_pig} className="corner_guinea_pig" alt="pig" />
    </div>
  );
}

export default App;
