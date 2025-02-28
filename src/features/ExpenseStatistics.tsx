import PolarAreaChart from "../components/PolarChart/PolarAreaChart";
import SectionTitle from "../components/SectionTitle";
import { useGetExpenseStatisticsQuery } from "../store/api";
const ExpenseStatistics = () => {
  const {
    data: expenseStatistics,
    isLoading,
    error,
  } = useGetExpenseStatisticsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>Error: "An error occurred while fetching expense statistics"</div>
    );
  if (!expenseStatistics) return <div>No expense statistics data</div>;
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Expense Statistics" />
      </div>
      <div className="w-full h-[325px] lg:h-[335px] rounded-[25px] p-[20px] pr-0 lg:p-[26px]  bg-card-bg mt-[10px]">
        <div className="flex flex-row justify-center gap-[8px] w-full h-full  y-scrollbar">
          <PolarAreaChart data={expenseStatistics} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
