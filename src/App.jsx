import React, { useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import { connect } from 'react-redux';
import { getUsersThunk } from './redux/usersReducer';
import Chat from './components/Chat';

const App = props => {

  const { getUsersThunk } = props;

  useEffect(() => {
    getUsersThunk();
  }, [getUsersThunk]);

  console.log(props);

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="categories">
          <span>Работа</span>
          <span>Флудилка</span>
        </div>
      </div>
      <div className="body">
        <UserList {...props} />
        <Chat />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users
  }
}

export default connect(mapStateToProps, {
  getUsersThunk
})(App);
