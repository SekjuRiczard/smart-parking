import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { slotState } from '../../../api/authService';

const COLORS = ['#00C49F', '#FF8042'];

function ContentCircleDiagram({ width, height }) {
  const [data, setData] = useState([
    { name: 'Free slots', value: 0 },
    { name: 'Busy slots', value: 0 }
  ]);

  useEffect(() => {
    slotState().then(res => res && setData([
      { name: 'Free slots', value: res.freeSlots },
      { name: 'Busy slots', value: res.busySlots }
    ]));
  }, []);

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="43%"
        outerRadius={100}
        label
      >
        {data.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
      </Pie>
      <Legend verticalAlign="top" align="center" />
    </PieChart>
  );
}

export default ContentCircleDiagram;