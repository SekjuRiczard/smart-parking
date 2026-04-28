import { useState, useEffect } from 'react';
import {
  apiOccupyFirstAvilable,
  getAllFreeSlots,
  apiOccupySlot,
} from '../../api/parkingService';
import { ParkingSlot } from '../../../../components/Reusable/ParkingSlot/ParkingSlot';
import styles from './FreeSlots.module.scss';

export const FreeSlots = () => {
  const [freeSlots, setFreeSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFreeSlots = async () => {
    setLoading(true);
    const slots = await getAllFreeSlots();
    setFreeSlots(slots || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchFreeSlots();
  }, []);

  const handleOccupy = async (id) => {
    const login = localStorage.getItem('login');
    if (!login) return;
    await apiOccupySlot(id, login);
    fetchFreeSlots();
  };

  if (loading) return <div className="loading-info">Loading spaces...</div>;

  return (
    <div className={styles.freeSlotsContainer}>
      <div className={styles.freeSlotsContainerHeader}>
        <h1 className={styles.freeSlotsContainerTitle}>Available Spaces</h1>
        <button
          className={styles.btnPrimary}
          onClick={async () => {
            await apiOccupyFirstAvilable();
            fetchFreeSlots();
          }}
          disabled={freeSlots.length === 0}
        >
          Quick Occupy
        </button>
      </div>

      <div className={styles.freeSlotsContainerGrid}>
        {freeSlots.length > 0 ? (
          freeSlots.map((slot) => (
            <ParkingSlot
              key={slot.id}
              id={slot.id}
              status="Ready"
              actionLabel="Occupy"
              onAction={handleOccupy}
              variant="free"
            />
          ))
        ) : (
          <div className={styles.emptyMsg}>No slots available.</div>
        )}
      </div>
    </div>
  );
};
