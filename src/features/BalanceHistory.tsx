import SectionTitle from "../components/SectionTitle";
import LineAreaChart from "../components/LineAreaChart";

const BalanceHistory = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Balance History" />
      </div>
      <div className="w-full h-[276px] lg:h-[276px] rounded-[25px] p-[20px] pr-0 lg:p-[26px]  bg-card-bg mt-[0px]">
        <div className="flex flex-row justify-center gap-[8px] w-full h-full  y-scrollbar">
          <LineAreaChart />
        </div>
      </div>
    </div>
  );
};

export default BalanceHistory;
