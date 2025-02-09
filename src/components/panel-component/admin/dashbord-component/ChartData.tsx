import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function ChartData() {
  const data = [
    { name: 'فروردین', value: 4000 },
    { name: 'اردیبهشت', value: 3000 },
    { name: 'خرداد', value: 5000 },
    { name: 'تیر', value: 2780 },
    { name: 'مرداد', value: 4890 },
    { name: 'شهریور', value: 3390 },
    { name: 'مهر', value: 3490 },
    { name: 'آبان', value: 4000 },
    { name: 'آذر', value: 2780 },
    { name: 'دی', value: 3890 },
    { name: 'بهمن', value: 2390 },
    { name: 'اسفند', value: 3490 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-xbold mb-4">آنالیز فروش</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#FF8C42" fill="#FF8C42" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartData;