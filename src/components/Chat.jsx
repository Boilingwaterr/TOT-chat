import React from 'react';
import Style from './Chat.module.css'
import Input from './Input';

const Chat = props => {
  console.log(props)
  return (
    <div className={Style.chatWrapper}>
      <div>chat log</div>
      <div className={Style.formWrapper}>
        <Input />
      </div>
    </div>
  );
}

export default Chat;
