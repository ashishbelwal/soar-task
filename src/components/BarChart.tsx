import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  depositData: number[];
  withdrawData: number[];
}

const labels: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const BarChart: FC<BarChartProps> = ({ depositData, withdrawData }) => {
  // Chart data
  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "Deposit",
        data: depositData,
        backgroundColor: "#396AFF",
        borderRadius: 10,
        maxBarThickness: 15,
        borderSkipped: false,
        categoryPercentage: 0.8,
        barThickness: 26,
      },
      {
        label: "Withdraw",
        data: withdrawData,
        backgroundColor: "#222222",
        borderRadius: 10,
        maxBarThickness: 15,
        borderSkipped: false,
        barThickness: 26,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",

        labels: {
          usePointStyle: true,
          boxWidth: 15,
          color: "#718EBF",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          display: true,
        },
        grid: {
          display: false,
          color: "red",
        },
        border: {
          display: false,
        },
        stacked: false,
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          color: "#F3F3F5",
          lineWidth: 0.5,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
