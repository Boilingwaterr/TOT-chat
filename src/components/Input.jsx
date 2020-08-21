import React, { useState } from 'react';
import Style from './Chat.module.css'

const Input = props => {
  console.log('input render')
  const [text, setText] = useState('');

  const changeText = char => setText(char);

  return (
    <form className={Style.inputForm}>
      <input type="text" value={text} onChange={e => changeText(e.target.value)} />
      <button className={Style.submit}>submit</button>
    </form>
  );
}

export default Input;
