import React, { useState } from "react";
import { evaluate } from 'mathjs';

import './button.css'
const Buttons = (props) => {
const [isTrue, setIsTrue] = useState(false);
    let currentVal = props.btn;
    let setOutput = props.setOutPut;

    function cal() {

        const invalidChars = ['+', '%', '/', '-', '*'];
        const firstChar = props.value[0];
        const lastChar = props.value[props.value.length - 1];
        
        function express() {
        if(props.value === '' || props.value === ' ' || props.value === '.') {
            alert('Empty input or invalid input')
            return false;
        }
        else if(invalidChars.includes(firstChar) || invalidChars.includes(lastChar)) {
             setOutput('invalid left or right input: operators should not be end or first character');

             return false;
        }
        
        setOutput(prevValue =>  prevValue = evaluate(props.value));
        currentVal(prevValue => prevValue = '');
        setIsTrue(prevBoo => prevBoo = !prevBoo);
        }
        express();
    }

    const [isDisabled, setIsDisabled] = useState(true)

    function flipBoo() {
        setIsDisabled(prevBoo =>  !prevBoo)
        console.log(isDisabled);
    }
    function flipBoo2() {
        setIsDisabled(false)
        console.log(isDisabled);
    }

    function erase() {
        currentVal(prevValue => prevValue = '');
        setOutput(prevValue => prevValue = '');
        console.log('output reset');
    }
 
     return ( 
        <div id="btn-ctn">
    <button  type="button" onClick={erase} className="btn">AC</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue = prevValue.slice(0, -1))}}className="btn">C</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '*')
                                        flipBoo()}} disabled={isDisabled} className="btn">*</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '9')
                                         flipBoo2()}} className="btn">9</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '8')
                                         flipBoo2()}}className="btn">8</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '7')
                                            flipBoo2()}} className="btn">7</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '-')
                                          flipBoo()}} disabled={isDisabled} className="btn">-</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '6')
                                            flipBoo2()}}className="btn">6</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '5')
                                            flipBoo2()}}className="btn">5</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '4')
                                            flipBoo2()}}className="btn">4</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '+')
                                    flipBoo()}} disabled={isDisabled} className="btn">+</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '3')
                                    flipBoo2()}}className="btn">3</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '2')
                                    flipBoo2()}}className="btn">2</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '1')
                                    flipBoo2()}}className="btn">1</button>
    <button  type="button" onClick={() => {
        currentVal(prevValue => prevValue += '/')
        flipBoo();
        }} disabled={isDisabled} className="btn">/</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '0')}}className="btn">0</button>
    <button  type="button" onClick={() => 
    {currentVal(prevValue => prevValue += '.');
     setIsTrue(prevBoo => prevBoo = !prevBoo);
     console.log(isTrue)
    }
    } className="btn" disabled={isTrue}>.</button>
    <button  type="button" onClick={() => {currentVal(prevValue => prevValue += '%')
                                    flipBoo()}} disabled={isDisabled} className="btn">%</button>
    <button  type="button" onClick={cal}className="btn" >=</button>
        </div>
    )

}

export default Buttons