import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { slotState } from '../../../parking/api/parkingService';
import styles from './ContentCircleDiagram.module.scss';
import { ResponsiveContainer } from 'recharts';

export const ContentCircleDiagram = () => {
  const [data, setData] = useState([
    { name: 'Free slots', value: 0 },
    { name: 'Busy slots', value: 0 },
  ]);

  useEffect(() => {
    slotState().then((res) => {
      if (res) {
        setData([
          { name: 'Free slots', value: res.freeSlots },
          { name: 'Busy slots', value: res.busySlots },
        ]);
      }
    });
  }, []);

  const COLORS = ['#10b981', '#ef4444'];

  return (
    <div className={styles.circleWrapper}>
      <h3>Occupancy Overview</h3>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              stroke="none"
            >
              {data.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '1rem',
                border: 'none',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              }}
            />
            <Legend verticalAlign="bottom" align="center" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
