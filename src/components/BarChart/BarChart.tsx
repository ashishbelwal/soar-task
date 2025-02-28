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
} from "chart.js";
import { BarChartProps, BarChartData } from "./types";
import { CHART_COLORS, BAR_STYLES, chartOptions } from "./config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: FC<BarChartProps> = ({ weeklyActivity }) => {
  const prepareChartData = (): BarChartData => {
    const labels = weeklyActivity.map((activity) => activity.label);
    const depositData = weeklyActivity.map((activity) => activity.deposit);
    const withdrawData = weeklyActivity.map((activity) => activity.withdraw);

    return {
      labels,
      datasets: [
        {
          label: "Deposit",
          data: depositData,
          backgroundColor: CHART_COLORS.deposit,
          ...BAR_STYLES,
        },
        {
          label: "Withdraw",
          data: withdrawData,
          backgroundColor: CHART_COLORS.withdraw,
          ...BAR_STYLES,
        },
      ],
    };
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={prepareChartData()} options={chartOptions} />
    </div>
  );
};

export default BarChart;
