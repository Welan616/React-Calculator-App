import React from "react";
import { evaluate } from 'mathjs';

import './button.css'
const Buttons = (props) => {

    let currentVal = props.btn;
    let setOutput = props.setOutPut;
    function cal() {
        function express() {
        if(props.value === '' || props.value === ' ') {
            alert('thats an empty input')
            return false;
        }
        setOutput(prevValue =>  prevValue = evaluate(props.value));
        currentVal(prevValue => prevValue = '')
            // currentVal(prevValue => prevValue = '');
        }
        express();
    }
     return ( 
        <div id="btn-ctn">
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue = '')}}className="btn">AC</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue = prevValue.slice(0, -1))}}className="btn">C</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '*')}}className="btn">*</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '9')}} className="btn">9</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '8')}}className="btn">8</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '7')}} className="btn">7</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '-')}}className="btn">-</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '6')}}className="btn">6</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '5')}}className="btn">5</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '4')}}className="btn">4</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '+')}}className="btn">+</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '3')}}className="btn">3</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '2')}}className="btn">2</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '1')}}className="btn">1</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '/')}}className="btn">/</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '0')}}className="btn">0</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '.')}}className="btn">.</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '%')}}className="btn">%</button>
    <button  type="button" onClick={cal}className="btn">=</button>
        </div>
    )

}

export default Buttons