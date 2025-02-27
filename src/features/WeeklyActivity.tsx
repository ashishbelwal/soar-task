import BarChart from "../components/BarChart";
import SectionTitle from "../components/SectionTitle";
const depositData: number[] = [500, 800, 600, 1200, 900, 700, 1100];
const withdrawData: number[] = [300, 400, 500, 600, 700, 800, 900];
const WeeklyActivity = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Weekly Activity" />
      </div>
      <div className="w-full h-[325px] lg:h-[335px] rounded-[25px] p-[20px] pr-0 lg:p-[26px]  bg-card-bg mt-[10px]">
        <div className="flex flex-col gap-[8px] w-full h-full pr-[20px] lg:pr-[26px] y-scrollbar">
          <BarChart depositData={depositData} withdrawData={withdrawData} />
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
