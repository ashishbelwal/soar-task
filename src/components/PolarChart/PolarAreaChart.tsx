import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { ExpenseStatistics } from "../../types";
import { options } from "./options";
import { backgroundColor } from "./config";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function PolarAreaChart({ data }: { data: ExpenseStatistics[] }) {
  const chartData = {
    labels: data.map((item) => item.label),
    responsive: true,
    datasets: [
      {
        label: "Expenses Distribution",
        data: data.map((item) => item.value),
        backgroundColor: backgroundColor,
      },
    ],
  };

  return <PolarArea data={chartData} options={options} />;
}

export default PolarAreaChart;
