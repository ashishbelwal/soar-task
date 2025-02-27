import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
  datasets: [
    {
      label: "Expenses Distribution",
      data: [30, 15, 35, 20],
      backgroundColor: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
      borderColor: "#fff",
      borderWidth: 4,
      hoverBorderColor: "#fff",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    r: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },

  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const dataset = context.dataset;
          const total = dataset.data.reduce(
            (acc: number, data: number) => acc + data,
            0
          );
          const value = dataset.data[context.dataIndex];
          const percentage = ((value / total) * 100).toFixed(0);
          return `${context.label}: ${percentage}%`;
        },
      },
      usePointStyle: true,
      pointStyle: "circle",
      pointRadius: 1,
    },
    legend: {
      display: true,
      position: "top" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 12,
        pointStyle: "circle",
        pointRadius: 1,
      },
    },
    labels: {
      usePointStyle: true,
    },
  },
};

export function PolarAreaChart() {
  return <PolarArea data={data} options={options} />;
}

export default PolarAreaChart;
