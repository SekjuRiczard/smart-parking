import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { slotState } from '../../../parking/api/parkingService';
import styles from './ContentMainChart.module.scss';

export const ContentMainChart = () => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem('slotData')) || []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await slotState();
        if (res) {
          const newVal = res.busySlots;
          const newPoint = {
            time: new Date().toLocaleTimeString(),
            busySlots: newVal,
          };
          setData((prev) => {
            const next = [...prev, newPoint];
            localStorage.setItem('slotData', JSON.stringify(next.slice(-50)));

            return next;
          });
        }
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    };
    
    fetchData();
    const i = setInterval(fetchData, 10000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Occupancy Trends</h3>
        <button
          className={styles.resetBtn}
          onClick={() => {
            localStorage.removeItem('slotData');
            setData([]);
          }}
        >
          Reset Data
        </button>
      </div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eee"
            />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                borderRadius: '1rem',
                border: 'none',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="busySlots"
              stroke="#a855f7"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
