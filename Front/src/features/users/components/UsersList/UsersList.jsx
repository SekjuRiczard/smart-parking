import { useState, useEffect } from 'react';
import { getUsersList, deactivateUser } from '../../api/usersService';
import styles from './UsersList.module.scss';

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  const load = () => {
    getUsersList().then((data) => data && setUsers(data));
  };

  useEffect(() => {
    load();
  }, []);

  const handleToggle = async (login) => {
    await deactivateUser(login);
    load();
  };

  return (
    <div className={styles.grid}>
      {users.map((u) => (
        <div
          key={u.login}
          className={`${styles.card} ${!u.active ? styles.cardInactive : ''}`}
        >
          <div className={styles.userData}>
            <h3>{u.name}</h3>
            <span>@{u.login}</span>
          </div>
          <button
            className={u.active ? styles.btnOff : styles.btnOn}
            onClick={() => handleToggle(u.login)}
          >
            {u.active ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      ))}
    </div>
  );
};
