import React, { useEffect, useState, useRef } from 'react';
import Style from './Chat.module.css'
import Input from './Input';
import Message from './Message';

const Chat = props => {

  const [greetings, setGreetings] = useState(true);
  const [placeholder, setPlaceHolder] = useState('');

  const { chat, type, auth, sendWorkMessage, sendFloodMessage } = props;

  const log = useRef([]);

  useEffect(() => {
    log.current.scrollTop = 99999;
  })

  const spaceValidate = msg => {
    return msg.trim();
  }

  const sendMessage = msg => {
    const validate = spaceValidate(msg);
    if (validate.length !== 0) {
      if (type === 'work') {
        sendWorkMessage(msg, auth.myNick, auth.myColor);
      } else if (type === 'flood') {
        sendFloodMessage(msg, auth.myNick, auth.myColor);
      }
    }
    else {
      setPlaceHolder('Введите сообщение.');
    }
  }

  useEffect(() => {
    setTimeout(() => setGreetings(false), 6000);
  }, [])

  const workChatLog = chat.workChat.map((i, indx) => {
    return <Message key={indx} i={i} indx={indx} {...props} />
  })

  const floodChatLog = chat.floodChat.map((i, indx) => {
    return <Message key={indx} i={i} indx={indx} {...props} />
  })

  return (
    <div className={Style.chatWrapper}>
      <div className={Style.chatLogWrapper}>
        <div className={Style.chatLog} ref={log}>
          {type === "work" ? workChatLog : floodChatLog}
        </div>
        {greetings && <div className={Style.greetings}>Добро пожаловать в чат!</div>}
      </div>
      <div className={Style.formWrapper}>
        <Input

          target={chat.target}
          placeholder={placeholder}

          submit={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
