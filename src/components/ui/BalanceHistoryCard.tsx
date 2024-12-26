import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jul', value: 120 },
  { month: 'Aug', value: 280 },
  { month: 'Sep', value: 450 },
  { month: 'Oct', value: 750 },
  { month: 'Nov', value: 250 },
  { month: 'Dec', value: 580 },
  { month: 'Jan', value: 620 },
];

const BalanceHistoryCard = () => {
  return (
    <div className="w-full p-6 h-[15.5rem] bg-white rounded-xl overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="45%" stopColor="#2d60ff" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#2d60ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#718EBF" tick={{ fill: '#94a3b8' }} />
          <YAxis stroke="#718EBF" tick={{ fill: '#718EBF' }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1814F3"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistoryCard;
