import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styles from './DashboardTopHeader.module.scss';

export const DashboardTopHeader = () => {
  return (
    <header className={styles.dashboardTopHeader}>
      <div className={styles.dashboardTopWelcome}>
        <h1>Dashboard</h1>
        <p>Manage your parking infrastructure</p>
      </div>
      <Link to="/userPanel">
        <AccountBoxIcon sx={{ fontSize: '1.5rem' }} />
        <span>Your Account</span>
      </Link>
    </header>
  );
};
