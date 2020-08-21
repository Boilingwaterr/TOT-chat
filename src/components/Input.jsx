import React, { useState } from 'react';
import Style from './Chat.module.css';

const Input = ({ type, sendWorkMessage, sendFloodMessage }) => {
  console.log('input render', type)
  const [text, setText] = useState('');

  const changeText = char => setText(char);

  const sendMessage = msg => {
    if (type === 'work') {
      sendWorkMessage(msg);
      setText('')
    } else if (type === 'flood') {
      sendFloodMessage(msg);
      setText('');
    }
  }
  const submitOnEnter = (e, msg) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(msg);
      setText('');
    }
  }
  return (
    <form className={Style.inputForm}>
      <input
        type="text"
        value={text}
        onChange={e => changeText(e.target.value)}
        onKeyPress={e => submitOnEnter(e, text)}
      />
      <button
        type='button'
        className={Style.submit}
        onClick={(e) => {
          sendMessage(text);
        }}
      >submit</button>
    </form>
  );
}

export default Input;
