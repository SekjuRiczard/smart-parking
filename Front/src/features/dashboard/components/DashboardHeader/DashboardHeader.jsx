import { useEffect, useState } from 'react';
import GarageIcon from '@mui/icons-material/Garage';
import BlockIcon from '@mui/icons-material/Block';
import TodayIcon from '@mui/icons-material/Today';
import { Card } from '../../../../components/Reusable/Card/Card';
import {
  allBusySlots,
  getAllFreeSlots,
} from '../../../parking/api/parkingService';
import styles from './DashboardHeader.module.scss';

export const DashboardHeader = () => {
  const [slots, setSlots] = useState({ f: 0, b: 0 });

  useEffect(() => {
    async function load() {
      const [f, b] = await Promise.all([getAllFreeSlots(), allBusySlots()]);
      setSlots({ f: f?.length || 0, b: b?.length || 0 });
    }
    load();
  }, []);

  const todayFormatted = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.dashboardHeader}>
      <div className={styles.grid}>
        <Card
          title="Free Slots"
          icon={<GarageIcon className={`${styles.icon} ${styles.iconFree}`} />}
          value={slots.f}
        />
        <Card
          title="Occupied Slots"
          icon={<BlockIcon className={`${styles.icon} ${styles.iconBusy}`} />}
          value={slots.b}
        />
        <Card
          title="Today's Date"
          icon={<TodayIcon className={`${styles.icon} ${styles.iconDate}`} />}
          value={todayFormatted}
        />
      </div>
    </section>
  );
};
