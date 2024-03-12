import React, { useState } from 'react';
import Buttons from './component/button/button.jsx';
import Screen from './component/screen/screen.jsx';
import './App.css';

const App = () => {
const [val, setVal] = useState('');
const [outPutVal, setOutPutVal] = useState('0');

  return (
      <div className="App">
      <Screen value={val} output={outPutVal}/>
      <Buttons btn={setVal} value={val} setOutPut={setOutPutVal}/>
      </div>
    )
}

export default App;
