import React, { useState } from 'react';
import Buttons from './component/button/button.jsx';
import Screen from './component/screen/screen.jsx';
import './App.css';

const App = () => {
const [val, setVal] = useState('');
const [outPutVal, setOutPutVal] = useState('');
const [isDay, setIsDay] = useState(true);


function toggleLightMode() {
  const ElemBtn = document.querySelectorAll('.btn:not(.toggle-btn)');
  ElemBtn.forEach(element => {
    element.classList.toggle('btn-light-mode');
  });
  const body = document.getElementById('body');
  body.classList.toggle('body-light-mode');
  const app = document.getElementById('app');
  app.classList.toggle('app-light-mode');

  const mainDisplay = document.querySelectorAll('.display');
  mainDisplay.forEach(elem => {
    elem.classList.toggle('light-mode');
  })
}
  return (
      <div className="App" id="app">
        <button type='button' onClick={toggleLightMode} id='toggleDark'>dark</button>
      <Screen darkMode={isDay} setDarkMode={setIsDay} value={val} output={outPutVal}/>
      <Buttons darkMode={isDay} setDarkMode={setIsDay} btn={setVal} output={outPutVal} value={val} setOutPut={setOutPutVal}/>
      </div>
    )
}

export default App;
