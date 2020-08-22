import React, { useEffect, useState } from 'react';
import Style from './Chat.module.css';

const Input = ({ target, submit, placeholder }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    target && setText(target)
  }, [target, setText])

  const changeText = char => setText(char);

  const submitOnEnter = (e, msg) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(msg);
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
        placeholder={placeholder}
      />
      <button
        type='button'
        className={Style.submit}
        onClick={(e) => {
          submit(text);
          setText('')
        }}
      >submit</button>
    </form>
  );
}

export default Input;
