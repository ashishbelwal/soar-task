import { ChartData, ChartOptions } from "chart.js";

export interface WeeklyActivity {
  label: string;
  deposit: number;
  withdraw: number;
}

export interface BarChartProps {
  weeklyActivity: WeeklyActivity[];
}

export type BarChartData = ChartData<"bar">;
export type BarChartOptions = ChartOptions<"bar">;
