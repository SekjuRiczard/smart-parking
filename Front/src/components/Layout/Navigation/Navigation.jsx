import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import InfoIcon from '@mui/icons-material/Info';
import styles from './Navigation.module.scss';

const NAV_LINKS = [
  { path: '/dashboard', label: 'Dashboard', icon: <SignalCellularAltIcon /> },
  { path: '/freeSlots', label: 'Free Slots', icon: <NoCrashIcon /> },
  { path: '/busySlots', label: 'Busy Slots', icon: <CarCrashIcon /> },
  { path: '/informations', label: 'Information', icon: <InfoIcon /> },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.navToggleFixed} ${!isOpen ? styles.navToggleFixedClosed : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </button>

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <img src="/logo.png" alt="Logo" className={styles.sidebarLogoImg} />
            <span className={styles.sidebarLogoText}>Parking</span>
          </div>
        </div>

        <nav className={styles.sidebarMenu}>
          {NAV_LINKS.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.navLinkIcon}>{icon}</span>
              <span className={styles.navLinkLabel}>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
