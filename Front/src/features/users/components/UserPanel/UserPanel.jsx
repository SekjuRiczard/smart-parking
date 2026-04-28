import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './UserPanel.module.scss';

export const UserPanel = ({ userData }) => {
  const navigate = useNavigate();

  if (!userData) return null;

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <div className={styles.panelCard}>
      <div className={styles.header}>
        <AccountCircleIcon className={styles.avatar} />
        <div className={styles.titleGroup}>
          <h2 className={styles.userName}>{userData.name}</h2>
          <span className={styles.roleTag}>{userData.role}</span>
        </div>
      </div>
      <div className={styles.info}>
        <p>
          Login: <strong>{userData.login}</strong>
        </p>
        <p>
          Status:{' '}
          <span className={userData.active ? styles.active : styles.inactive}>
            {userData.active ? 'Active' : 'Inactive'}
          </span>
        </p>
      </div>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        <LogoutIcon fontSize="small" /> Logout
      </button>
    </div>
  );
};
