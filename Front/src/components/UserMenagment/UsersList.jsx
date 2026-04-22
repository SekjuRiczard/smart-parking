import React, { useState, useEffect } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import { getUsersList, deactivateUser } from '../../api/authService';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(function() {
    getUsersList().then(res => res && setUsers(res));
  }, []);

  async function handleToggle(login, currentStatus) {
    const ok = await deactivateUser(login);
    if (ok) {
      setUsers(prev => prev.map(u => 
        u.login === login ? { ...u, active: !currentStatus } : u
      ));
    }
  }

  return (
    <div className="usersListContainer">
      <h2 style={{ fontFamily: 'sans-serif' }}>User List</h2>
      <div className="usersGrid">
        {users.map(function(u) {
          return (
            <div key={u.id} className="userCard">
              <AccountCircle sx={{ fontSize: 40, color: '#3f8efc' }} />
              <div className="userInfo">
                <p>ID: {u.id}</p>
                <p>Login: {u.login}</p>
                <p>Active: {u.active ? 'Yes' : 'No'}</p>
              </div>
              <Switch
                checked={u.active}
                onChange={function() { handleToggle(u.login, u.active); }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersList;