import styles from './ParkingSlot.module.scss';

export const ParkingSlot = ({
  id,
  status,
  actionLabel,
  onAction,
  variant = 'free',
}) => {
  return (
    <div className={`${styles.parkingSlot} ${styles[variant]}`}>
      <div className={styles.content}>
        <div className={styles.details}>
          <span className={styles.number}>Slot #{id}</span>
          <span className={styles.statusText}>{status}</span>
        </div>
        <button className={styles.actionBtn} onClick={() => onAction(id)}>
          {actionLabel}
        </button>
      </div>
      <div className={styles.indicator}></div>
    </div>
  );
};
