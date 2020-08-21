import React from 'react';
import Style from './UserList.module.css'

const UserList = ({ users, setTarget }) => {
  const userList = users.map((i, indx) => {
    return <div
      onClick={() => setTarget(i.login.username)}
      key={indx}
      className={Style.user}
    >
      <img src={i.picture.thumbnail} alt="#" />
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
