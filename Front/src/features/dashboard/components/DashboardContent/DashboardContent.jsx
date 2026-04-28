import { ContentMainChart } from '../ContentMainChart/ContentMainChart';
import { ContentCircleDiagram } from '../ContentCircleDiagram/ContentCircleDiagram';
import styles from './DashboardContent.module.scss';

export const DashboardContent = () => {
  return (
    <section className={styles.dashboardContent}>
      <ContentMainChart />
      <ContentCircleDiagram />
    </section>
  );
};
