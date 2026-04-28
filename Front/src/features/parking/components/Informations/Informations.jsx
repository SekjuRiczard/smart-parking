import AssessmentIcon from '@mui/icons-material/Assessment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import InfoIcon from '@mui/icons-material/Info';
import styles from './Informations.module.scss';

export const Informations = () => {
  return (
    <div className={styles.infoCard}>
      <header className={styles.infoCardHeader}>
        <div className={styles.infoCardIconWrapper}>
          <InfoIcon />
        </div>
        <h1 className={styles.infoCardTitle}>Smart Parking System</h1>
        <p className={styles.infoCardTagline}>
          Efficient and intuitive parking management
        </p>
      </header>

      <div className={styles.infoCardContent}>
        <p className={styles.infoCardIntro}>
          Welcome to the <strong>Smart Parking System</strong>! Our platform
          provides an intuitive way to manage parking spaces and monitor
          real-time occupancy using modern web technologies.
        </p>

        <div className={styles.infoCardGrid}>
          <div className={styles.infoFeature}>
            <AssessmentIcon className={styles.infoFeatureIcon} />
            <div className={styles.infoFeatureText}>
              <h4>Interactive Analytics</h4>
              <p>
                Visualize parking slot availability through high-end interactive
                charts.
              </p>
            </div>
          </div>

          <div className={styles.infoFeature}>
            <VisibilityIcon className={styles.infoFeatureIcon} />
            <div className={styles.infoFeatureText}>
              <h4>Live Monitoring</h4>
              <p>
                Track free and occupied parking slots in real time with zero
                delay.
              </p>
            </div>
          </div>

          <div className={styles.infoFeature}>
            <TouchAppIcon className={styles.infoFeatureIcon} />
            <div className={styles.infoFeatureText}>
              <h4>Effortless Control</h4>
              <p>
                Manage infrastructure by effortlessly reserving and releasing
                spaces.
              </p>
            </div>
          </div>
        </div>

        <footer className={styles.infoCardFooter}>
          <p>
            This project showcases the capabilities of modern technologies in
            solving everyday challenges. Experience the future of parking
            management.
          </p>
        </footer>
      </div>
    </div>
  );
};
