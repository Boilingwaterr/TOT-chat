import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import { connect } from 'react-redux';
import { getUsersThunk } from './redux/usersReducer';
import Chat from './components/Chat';
import { sendFloodMessage, sendWorkMessage, setTarget, deleteMessage, editMessage } from './redux/chatReducer';
import Auth from './components/Auth';
import { setAuthorization, getAuthorization, logoutThunk } from './redux/authReducer';

const App = props => {

  const [chatType, setchatType] = useState('work');
  const {
    getUsersThunk, auth, getAuthorization, setTarget, logoutThunk
  } = props;

  useEffect(() => {
    !auth.isAuth && getAuthorization()
  }, [getAuthorization, auth.isAuth]);

  useEffect(() => {
    auth.isAuth && getUsersThunk();
  }, [getUsersThunk, auth.isAuth, chatType]);

  const active = {
    backgroundColor: '#e7af69'
  }

  if (!auth.isAuth) {
    return <Auth auth={auth} setAuthorization={props.setAuthorization} />
  } else {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            <h1>logo</h1>
          </div>
          <div className="categories">
            <span
              style={(chatType === 'work') ? active : undefined}
              onClick={() => {
                setchatType('work')
              }}
            >
              Работа
            </span>
            <span
              style={(chatType === 'flood') ? active : undefined}
              onClick={() => {
                setchatType('flood')
              }}
            >
              Флудилка
            </span>
            <span
              onClick={() => {
                logoutThunk()
              }}
              className="logout"
            >
              log out
            </span>
          </div>
        </div>
        <div className="body">
          <UserList users={props.users} setTarget={setTarget} />
          <Chat
            chat={props.chat}
            auth={auth}
            type={chatType}
            sendWorkMessage={props.sendWorkMessage}
            sendFloodMessage={props.sendFloodMessage}
            deleteMessage={props.deleteMessage}
            editMessage={props.editMessage}
          />
        </div>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {

    users: state.usersReducer.users,
    chat: state.chatReducer,
    auth: state.authReducer
  }
}

export default connect(mapStateToProps, {
  getUsersThunk,
  sendWorkMessage,
  sendFloodMessage,
  setAuthorization,
  getAuthorization,
  setTarget,
  logoutThunk,
  deleteMessage,
  editMessage
})(App);
