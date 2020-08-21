import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import { connect } from 'react-redux';
import { getUsersThunk } from './redux/usersReducer';
import Chat from './components/Chat';
import { sendFloodMessage, sendWorkMessage } from './redux/chatReducer';
import Auth from './components/Auth';
import { setAuthorization, getAuthorization } from './redux/authReducer';

const App = props => {

  const [chatType, setchatType] = useState('work');

  const { getUsersThunk, auth, getAuthorization } = props;

  useEffect(() => {
    !auth.isAuth && getAuthorization()
  }, [getAuthorization, auth.isAuth]);

  useEffect(() => {
    console.log('req')
    auth.isAuth && getUsersThunk();
  }, [getUsersThunk, auth.isAuth, chatType]);

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
            <span onClick={() => setchatType('work')}>Работа</span>
            <span onClick={() => setchatType('flood')}>Флудилка</span>
          </div>
        </div>
        <div className="body">
          <UserList users={props.users} />
          <Chat
            chat={props.chat}
            type={chatType}
            sendWorkMessage={props.sendWorkMessage}
            sendFloodMessage={props.sendFloodMessage}
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
  getAuthorization
})(App);
