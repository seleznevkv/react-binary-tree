import React, { useState } from 'react';
import './input-panel.css';

function InputPanel({ onInput }) {
  const [nodeNumber, setnodeNumber] = useState('');
  const [text, settext] = useState('');

  const sendNumber = e => {
    //sending input value parameter to function in app.js
    e.preventDefault();
    onInput(nodeNumber);
  };

  const changeValue = e => {
    //checking input value, adding into state
    if (!isNaN(e.target.value) && +e.target.value < 7) {
      setnodeNumber(e.target.value);
      settext('');
    } else {
      settext('Введите число меньше 7');
    }
  };

  return (
    <div>
      <form onSubmit={sendNumber}>
        <input
          className='form-input'
          type='text'
          placeholder='Введите количество уровней'
          onChange={changeValue}
          value={nodeNumber}
        />
        <button className='btn-show' type='submit'>
          Показать
        </button>
        <span>{text}</span>
      </form>
    </div>
  );
}

export default InputPanel;
