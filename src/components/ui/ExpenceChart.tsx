import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Entertainment', value: 30, color: '#3C4F88' },
  { name: 'Bill Expense', value: 15, color: '#FF7300' },
  { name: 'Investment', value: 20, color: '#396AFF' },
  { name: 'Others', value: 35, color: '#232323' },
];

const COLORS = data.map((entry) => entry.color);

const ExpenceChart: React.FC = () => {
  return (
    <div className="w-full h-80 py-6 bg-white rounded-3xl border border-[#DFEAF2]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="50%"
            outerRadius="80%"
            label={({ name, value }) => `${value}% ${name}`}
            // labelStyle={{ fontSize: '12px', fontWeight: 'bold' }}
            labelLine={false}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenceChart;
