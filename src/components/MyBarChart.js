"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ↓↓↓ この行が、外部からデータを受け取るための重要な部分です！
const MyBarChart = ({ chartData }) => {

  // データが渡されていない場合の安全対策
  if (!chartData || !chartData.labels || !chartData.datasets) {
    return <div className="text-center text-gray-500">グラフデータがありません。</div>;
  }

  // グラフのオプション設定
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'オリジナル棒グラフ',
      },
    },
  };

  // グラフに表示するデータ (propsから渡されたchartDataを使います)
  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets,
  };

  return <Bar options={options} data={data} />;
};

export default MyBarChart;