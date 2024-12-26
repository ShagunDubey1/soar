import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DayData {
  day: string;
  deposit: number;
  withdraw: number;
}

const WeeklyTransactionsChart: React.FC = () => {
  const data: DayData[] = [
    { day: 'Sat', deposit: 220, withdraw: 450 },
    { day: 'Sun', deposit: 120, withdraw: 350 },
    { day: 'Mon', deposit: 250, withdraw: 300 },
    { day: 'Tue', deposit: 350, withdraw: 450 },
    { day: 'Wed', deposit: 230, withdraw: 150 },
    { day: 'Thu', deposit: 230, withdraw: 380 },
    { day: 'Fri', deposit: 320, withdraw: 380 },
  ];

  return (
    <div className="w-full h-80 pt-2 pb-4 bg-white rounded-3xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className=" relative"
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
        >
          <CartesianGrid
            color="#F3F3F5"
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="day"
            tick={{ fill: '#718EBF' }}
            axisLine={false}
            tickLine={false}
            wordSpacing={10}
            fontSize={12}
          />
          <YAxis
            tick={{ fill: '#718EBF' }}
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
            axisLine={false}
            tickLine={false}
            wordSpacing={10}
            fontSize={12}
          />
          <Legend
            iconType="circle"
            iconSize={10}
            formatter={(value) => (
              <span style={{ fontSize: '12px' }}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </span>
            )}
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              paddingBottom: '12px',
              display: 'flex',
              gap: '26px',
              flexDirection: 'row-reverse',
            }}
          />

          <Bar
            dataKey="withdraw"
            fill="#232323"
            radius={[30, 30, 30, 30]}
            barSize={15}
          />
          <Bar
            dataKey="deposit"
            fill="#396AFF"
            radius={[30, 30, 30, 30]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyTransactionsChart;
