import React, { useState } from 'react';
import Buttons from './component/button/button.jsx';
import Screen from './component/screen/screen.jsx';
import './App.css';
const App = () => {
const [val, setVal] = useState('');
const [outPutVal, setOutPutVal] = useState('');
const [isDay, setIsDay] = useState(true);
const [isSun, setIsSun] = useState('/moon.svg')


function toggleLightMode() {
  const ElemBtn = document.querySelectorAll('.btn:not(.toggle-btn)');
  ElemBtn.forEach(element => {
    element.classList.toggle('btn-light-mode');
  });
  const body = document.getElementById('body');
  body.classList.toggle('body-light-mode');
  const app = document.querySelector('.calculator');
  app.classList.toggle('app-light-mode');

  const mainDisplay = document.querySelectorAll('.display');
  mainDisplay.forEach(elem => {
    elem.classList.toggle('light-mode');
  })
  const changeSrc = () => {
    setIsSun(prevSrc => prevSrc === '/moon.svg' ? '/sun.svg' : '/moon.svg');
  }
  changeSrc();
}


  return (
      <div className="App" id="app">
        <button type='button' onClick={toggleLightMode} id='toggleDark'>
        <img src={isSun} alt='' id='mode' />
        </button>
        <div className="container">
        <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </div>
        </div>
        <div className='calculator'>
      <Screen darkMode={isDay} setDarkMode={setIsDay} value={val} output={outPutVal}/>
      <Buttons darkMode={isDay} setDarkMode={setIsDay} btn={setVal} output={outPutVal} value={val} setOutPut={setOutPutVal}/>
      </div>
      <div className="container" id='sec-con'>
        <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
        </div>
    </div>
      </div>
    )
}

export default App;
