import { useEffect, useState } from 'react';
import { LocalParking, CheckCircle, Cancel } from '@mui/icons-material';
import { slotState } from '../../api/parkingService';
import styles from './ParkingSummary.module.scss';

export const ParkingSummary = () => {
  const [slots, setSlots] = useState({ freeSlots: 0, busySlots: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSlots = async () => {
      setIsLoading(true);
      const data = await slotState();
      if (data) {
        setSlots(data);
      }
      setIsLoading(false);
    };

    fetchSlots();
  }, []);

  const totalSlots = slots.freeSlots + slots.busySlots;
  const freePercentage =
    totalSlots > 0 ? (slots.freeSlots / totalSlots) * 100 : 0;

  return (
    <div className={styles.parkingContainer}>
      <div className={styles.parkingWrapper}>
        <div className={styles.parkingHeader}>
          <div className={styles.parkingHeaderTitleRow}>
            <LocalParking className={styles.parkingHeaderIcon} />
            <h2 className={styles.parkingHeaderTitle}>Parking Status</h2>
          </div>
          <p className={styles.parkingHeaderSubtitle}>Real-time availability</p>
        </div>

        <div className={styles.parkingCard}>
          <div className={styles.parkingCardGradientOverlay}></div>

          <div className={styles.parkingCardContent}>
            <div className={styles.parkingProgress}>
              <div className={styles.parkingProgressBar}>
                <div
                  className={styles.parkingProgressFill}
                  style={{ width: `${freePercentage}%` }}
                ></div>
              </div>
              <p className={styles.parkingProgressLabel}>
                {isLoading ? '...' : Math.round(freePercentage)}% available
              </p>
            </div>

            <div className={styles.parkingStats}>
              <div className={`${styles.statCard} ${styles.statCardFree}`}>
                <div className={styles.statCardContent}>
                  <div
                    className={`${styles.statCardIconWrapper} ${styles.statCardIconWrapperFree}`}
                  >
                    <CheckCircle className={styles.statCardIcon} />
                  </div>
                  <div className={styles.statCardDetails}>
                    <p className={styles.statCardLabel}>Free Slots</p>
                    <p className={styles.statCardValue}>
                      {isLoading ? '...' : slots.freeSlots}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${styles.statCard} ${styles.statCardBusy}`}>
                <div className={styles.statCardContent}>
                  <div
                    className={`${styles.statCardIconWrapper} ${styles.statCardIconWrapperBusy}`}
                  >
                    <Cancel className={styles.statCardIcon} />
                  </div>
                  <div className={styles.statCardDetails}>
                    <p className={styles.statCardLabel}>Busy Slots</p>
                    <p className={styles.statCardValue}>
                      {isLoading ? '...' : slots.busySlots}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.parkingTotal}>
              <p className={styles.parkingTotalText}>
                Total capacity:{' '}
                <span>{isLoading ? '...' : totalSlots} spaces</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
