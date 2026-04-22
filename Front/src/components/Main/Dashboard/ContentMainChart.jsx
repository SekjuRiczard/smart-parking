import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { slotState } from '../../../api/authService';

function ContentMainChart(){
  const [busy, setBusy] = useState(0);
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('slotData')) || []);

  useEffect(() => {
    const i = setInterval(() => slotState().then(res => res && setBusy(res.busySlots)), 10000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    setData(prev => {
      const next = [...prev, { time: new Date().toLocaleTimeString(), busySlots: busy }];
      localStorage.setItem('slotData', JSON.stringify(next));
      return next;
    });
  }, [busy]);

  return (
    <div>
      <button onClick={() => { localStorage.removeItem('slotData'); setData([]); }}>reset</button>
      <ResponsiveContainer width={700} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="busySlots" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContentMainChart;