import { ChartOptions } from "chart.js";

export const options: ChartOptions<"polarArea"> = {
  responsive: true,
  scales: {
    r: {
      type: "radialLinear",
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
    },

    legend: {
      display: true,
      position: "top" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 12,
        pointStyle: "circle",
      },
    },
  },
};
