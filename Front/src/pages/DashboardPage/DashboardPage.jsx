import { DashboardHeader } from '../../features/dashboard/components/DashboardHeader/DashboardHeader';
import { DashboardContent } from '../../features/dashboard/components/DashboardContent/DashboardContent';
import { Footer } from '../../components/Layout/Footer/Footer';
import { DashboardTopHeader } from '../../features/dashboard/components/DashboardTopHeader/DashboardTopHeader';
import styles from './Dashboard.module.scss';

export const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <DashboardTopHeader />
      <DashboardHeader />
      <DashboardContent />
      <Footer />
    </div>
  );
};
