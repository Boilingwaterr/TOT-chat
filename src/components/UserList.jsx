import React from 'react';
import Style from './UserList.module.css'

const UserList = ({ users }) => {

  const userList = users.map((i, indx) => {
    return <div key={indx} className={Style.user}>
      {i.login.username}
    </div>
  })

  return (
    <div className={Style.list}>
      <div className={Style.online}>Online: </div>
      {userList}
    </div>
  );
}

export default UserList;
