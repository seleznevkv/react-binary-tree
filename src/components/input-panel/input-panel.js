import React, { useState } from 'react'
import './input-panel.css'

function InputPanel({onInput}) {
    const [nodeNumber, setnodeNumber] = useState(0);
    const [text, settext] = useState('');

    const sendNumber = (e) => {
        e.preventDefault();
        onInput(nodeNumber);
    }

    const changeValue = (e) => {
        if (!isNaN(e.target.value) && (+e.target.value < 7)) {
             
            setnodeNumber(e.target.value);
            settext("");
        } else {
            settext("Введите число меньше 7");
        }
        
    }

    return (
        <div>
            <form onSubmit={sendNumber}>
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Введите количество уровней" 
                    onChange={changeValue}
                    value={nodeNumber}
                />
                <button 
                    className="btn-show"
                    type="submit"
                >Показать
                </button>
                <span>{text}</span>
            </form>
        </div>
    )
}

export default InputPanel
