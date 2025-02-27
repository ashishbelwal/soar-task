import PolarAreaChart from "../components/PolarAreaChart";
import SectionTitle from "../components/SectionTitle";
const ExpenseStatistics = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Expense Statistics" />
      </div>
      <div className="w-full h-[325px] lg:h-[335px] rounded-[25px] p-[20px] pr-0 lg:p-[26px]  bg-card-bg mt-[10px]">
        <div className="flex flex-row justify-center gap-[8px] w-full h-full  y-scrollbar">
          <PolarAreaChart />
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
