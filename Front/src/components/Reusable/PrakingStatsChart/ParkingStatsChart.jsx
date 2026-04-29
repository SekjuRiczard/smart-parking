import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import styles from './ParkingStatsChart.module.scss';

export const ParkingStatsChart = ({ title, subtitle, data }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>

      <div className={styles.chartContainer}>
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 14 }}
                dy={10}
              />
              <Tooltip
                cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                contentStyle={{
                  borderRadius: '1rem',
                  border: 'none',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  fontWeight: 600,
                }}
              />
              {/* Zaokrąglone słupki (radius) */}
              <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={60}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className={styles.loading}>Connecting to sensors...</div>
        )}
      </div>
    </article>
  );
};
