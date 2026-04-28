import { useState, useEffect } from 'react';
import { getUserData } from '../../features/users/api/usersService';
import styles from './UserDashboard.module.scss';
import { UsersList } from '../../features/users/components/UsersList/UsersList';
import { UserPanel } from '../../features/users/components/UserPanel/UserPanel';

export const UserDashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (login) {
      getUserData(login).then((data) => {
        setUserData(data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div className={styles.loader}>Loading profile data...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <UserPanel userData={userData} />
      {userData?.role === 'ADMIN' && <UsersList />}
    </div>
  );
};
