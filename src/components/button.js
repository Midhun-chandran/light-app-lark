import React from 'react';
import { useState } from 'react';
import './button.css';
function Button({ isOn, toggle }) {

    var [color, setcolor] = useState('#666666');

    var buttonclick = () => {
        isOn === 'ON' ? setcolor("#ff6600") : setcolor("#666666");
        toggle();
    }
    return (
        <div className="container">
            <div className="light">
                <button style={{ background: color }}> </button>
            </div>
            <div className="switch">
                <button onClick={buttonclick}  >{isOn} </button>
            </div>
        </div >
    );

}
export default Button;