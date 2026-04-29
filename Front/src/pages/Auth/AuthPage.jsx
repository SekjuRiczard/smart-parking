import { useState, useEffect } from 'react';
import { LoginForm } from '../../features/auth/components/Login/LoginForm';
import { RegisterForm } from '../../features/auth/components/Register/RegisterForm';
import { ParkingStatsChart } from '../../components/Reusable/PrakingStatsChart/ParkingStatsChart';
import { slotState } from '../../features/parking/api/parkingService';
import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    slotState().then((res) => {
      if (res) {
        setParkingData([
          { name: 'Free Slots', value: res.freeSlots, color: '#10b981' },
          { name: 'Busy Slots', value: res.busySlots, color: '#ef4444' },
        ]);
      }
    });
  }, []);

  return (
    <main className={styles.authPage}>
      <section className={styles.formSection}>
        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitch={() => setIsLogin(true)} />
        )}
      </section>

      <section className={styles.previewSection}>
        <ParkingStatsChart
          title="Live Parking Status"
          subtitle="Real-time occupancy overview"
          data={parkingData}
        />
      </section>
    </main>
  );
};
