import { useState, useEffect } from 'react';
import { allBusySlots, releaseSlot } from '../../api/parkingService';
import { ParkingSlot } from '../../../../components/Reusable/ParkingSlot/ParkingSlot';
import styles from './BusySlots.module.scss';

export const BusySlots = () => {
  const [busySlots, setBusySlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentLogin = localStorage.getItem('login');

  const fetchBusySlots = async () => {
    setLoading(true);
    const slots = await allBusySlots();
    setBusySlots(slots || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchBusySlots();
  }, []);

  const handleRelease = async (id) => {
    await releaseSlot(id);
    fetchBusySlots();
  };

  if (loading)
    return <div className={styles.loading}>Updating registry...</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titles}>
          <h1>Occupied Spaces</h1>
          <p>Manage currently taken parking spots</p>
        </div>
        <div className={styles.count}>
          Total: <strong>{busySlots.length}</strong>
        </div>
      </header>

      <div className={styles.grid}>
        {busySlots.length > 0 ? (
          busySlots.map((slot) => (
            <ParkingSlot
              key={slot.id}
              id={slot.id}
              status={`Taken`}
              actionLabel="Release"
              onAction={handleRelease}
              variant="busy"
              showAction={slot.userLogin === currentLogin}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <h3>No occupied slots</h3>
            <p>All parking spaces are currently free.</p>
          </div>
        )}
      </div>
    </div>
  );
};
