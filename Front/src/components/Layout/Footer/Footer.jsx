import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.text}>
            Created with <FavoriteIcon className={styles.iconHeart} /> for
            better parking
          </p>
          <span className={styles.copyright}>
            &copy; {currentYear} Smart Parking System. All rights reserved.
          </span>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/SekjuRiczard"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <GitHubIcon className={styles.icon} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
