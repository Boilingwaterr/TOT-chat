import React, { useEffect, useState } from 'react';
import Style from './Chat.module.css'
import Input from './Input';

const Chat = props => {

  const [greetings, setGreetings] = useState(true);

  const { chat, type, auth } = props;

  useEffect(() => {
    setTimeout(() => setGreetings(false), 6000);
  }, [])

  const workChatLog = chat.workChat.map((i, indx) => {
    return <div
      className={Style.messageWrapper}
      key={indx}
    >
      <div
        style={{ color: i.color }}
        className={Style.messageNickname}
      >
        {i.nickname}:
      </div>
      <div className={Style.message}>
        {i.message}
      </div>

    </div>
  })

  const floodChatLog = chat.floodChat.map((i, indx) => {
    return <div className={Style.messageWrapper} key={indx}>
      <div
        style={{ color: i.color }}
        className={Style.messageNickname}
      >
        {i.nickname}:
    </div>
      <div className={Style.message}>
        {i.message}
      </div>

    </div>
  })

  return (
    <div className={Style.chatWrapper}>
      <div className={Style.chatLogWrapper}>
        <div className={Style.chatLog}>
          {type === "work" ? workChatLog : floodChatLog}
        </div>
        {greetings && <div className={Style.greetings}>Добро пожаловать в чат!</div>}
      </div>
      <div className={Style.formWrapper}>
        <Input
          target={chat.target}
          auth={auth}
          type={type}
          sendWorkMessage={props.sendWorkMessage}
          sendFloodMessage={props.sendFloodMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
