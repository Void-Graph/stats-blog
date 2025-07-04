"use client"; // このコンポーネントがブラウザで動作することを明示します

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

// Chart.jsに必要な要素を登録します
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyBarChart = () => {
  // グラフのオプション設定
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'サンプル棒グラフ',
      },
    },
  };

  // グラフに表示するデータ
  const data = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        label: 'データセットA',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'データセットB',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default MyBarChart;