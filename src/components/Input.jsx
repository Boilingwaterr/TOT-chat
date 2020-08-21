import React, { useState, useEffect } from 'react';
import Style from './Chat.module.css';

const Input = ({ type, sendWorkMessage, sendFloodMessage, auth, target }) => {

  const [text, setText] = useState('');

  useEffect(() => {
    target && setText(target)
  }, [target])

  const changeText = char => setText(char);

  const sendMessage = msg => {
    if (type === 'work') {
      sendWorkMessage(msg, auth.myNick, auth.myColor);
      setText('')
    } else if (type === 'flood') {
      sendFloodMessage(msg, auth.myNick, auth.myColor);
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
