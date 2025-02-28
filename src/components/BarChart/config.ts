import { BarChartOptions } from "./types";

export const CHART_COLORS = {
  deposit: "#396AFF",
  withdraw: "#222222",
  grid: "#F3F3F5",
  legend: "#718EBF",
} as const;

export const BAR_STYLES = {
  borderRadius: 10,
  maxBarThickness: 15,
  borderSkipped: false,
  barThickness: 26,
  categoryPercentage: 0.8,
} as const;

export const chartOptions: BarChartOptions = {
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
        color: CHART_COLORS.legend,
      },
    },
  },
  scales: {
    x: {
      ticks: { display: true },
      grid: { display: false },
      border: { display: false },
      stacked: false,
    },
    y: {
      beginAtZero: true,
      border: { display: false },
      grid: {
        color: CHART_COLORS.grid,
        lineWidth: 0.5,
      },
    },
  },
};
