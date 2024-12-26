import { Chart } from 'react-google-charts';

const ExpenceChart = () => {
  const data = [
    ['Category', 'Percentage'],
    ['Bill', 15],
    ['Others', 35],
    ['Investment', 20],
    ['Entertainment', 30],
  ];

  const options = {
    slices: {
      1: { offset: 0.03 },
      2: { offset: 0 },
      3: { offset: 0.05 },
      0: { offset: 0.11 },
    },
    colors: ['#FC7900', '#232323', '#396AFF', '#343C6A'],
    legend: "none",
    pieSliceText: 'label',
  };

  return (
    <div className=" rounded-3xl bg-white overflow-hidden">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="320px"
        className=" rounded-3xl"
      />
    </div>
  );
};

export default ExpenceChart;
