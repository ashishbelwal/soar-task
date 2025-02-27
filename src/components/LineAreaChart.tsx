import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
        borderDash: [5, 5],
        drawBorder: false,
        lineWidth: 1,
        color: "#DFE5EE",
      },
      border: {
        dash: [5, 5],
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
        color: "#DFE5EE",
        borderDash: [5, 5],
        drawBorder: false,
        lineWidth: 1,
      },
      border: {
        dash: [5, 5],
        display: false,
      },
      ticks: {
        // forces step size to be 50 units
        maxTicksLimit: 6,
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      borderColor: "#1814F3",
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
        gradient.addColorStop(0, "#2D60FF50");
        gradient.addColorStop(1, "#2D60FF00");

        return gradient;
      },
      tension: 0.3,
      pointRadius: 0,
      borderWidth: 3,
    },
  ],
};

export default function LineAreaChart() {
  return <Line options={options} data={data} />;
}
