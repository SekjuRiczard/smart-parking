import styles from './Card.module.scss';

export const Card = ({ title, icon, value }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <h2 className={styles.value}>{value}</h2>
      </div>
      <div className={styles.iconContainer}>{icon}</div>
    </div>
  );
};
