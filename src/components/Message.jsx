import React, { useState } from 'react';
import Style from './Chat.module.css'
import Input from './Input';

const Message = ({
  i, indx, deleteMessage, editMessage,
  auth, chat, type }) => {

  //deleteMessage, editMessage 
  const [editMode, setEditMode] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [text, setText] = useState('');
  const [placeholder, setPlaceHolder] = useState('');

  const spaceValidate = msg => {
    return msg.trim();
  }

  const edit = (msg) => {
    const validate = spaceValidate(msg);
    if (validate.length !== 0) {
      editMessage(indx, type, msg, auth.myNick, auth.myColor);
      setEditModal(!editModal)
      setText('')
    }
    else {
      setText('');
      setPlaceHolder('Введите сообщение.');
    }
  }

  return <div
    style={i.nickname === auth.myNick ? { boxShadow: `0px 0px 8px ${auth.myColor}` } : undefined}
    className={Style.messageWrapper}
    key={indx}
    onClick={() => setEditMode(!editMode)}
  >
    <div
      style={{ color: i.color }}
      className={Style.messageNickname}
    >
      {i.nickname}:
    </div>
    <div className={Style.message}>
      {i.message}
      {editModal && i.nickname === auth.myNick && <div className={Style.editModal}>
        <Input
          setText={setText}
          target={chat.target}
          placeholder={placeholder}
          text={text}
          submit={edit}
        />
      </div>}
    </div>
    {editMode && i.nickname === auth.myNick && <div className={Style.editMode}>
      <div
        className={Style.edit}
        onClick={() => {
          setEditModal(!editModal);
        }}
      >edit</div>
      <div
        className={Style.delete}
        onClick={() => deleteMessage(indx, type)}
      >delete</div>
    </div>}

  </div>
}



export default Message;
