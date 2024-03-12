import React from "react";
import './screen.css'

const Screen = (props) => {
function changeVal() {
    return props.value;
}
    return (
<div className="main-display">
<p className='display answer'>{props.output}</p>
<input type="text" name="display" className="display" value={props.value} onChange={changeVal} />
</div>
    )
}

export default Screen