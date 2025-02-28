import BarChart from "../components/BarChart/BarChart";
import SectionTitle from "../components/SectionTitle";
import { useGetWeeklyActivityQuery } from "../store/api";
const WeeklyActivity = () => {
  const {
    data: weeklyActivity,
    isLoading,
    error,
  } = useGetWeeklyActivityQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error)
    return <div>Error: "An error occurred while fetching weekly activity"</div>;
  if (!weeklyActivity) return <div>No weekly activity data</div>;
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Weekly Activity" />
      </div>
      <div className="w-full h-[325px] lg:h-[335px] rounded-[25px] p-[20px] pr-0 lg:p-[26px]  bg-card-bg mt-[10px]">
        <div className="flex flex-col gap-[8px] w-full h-full pr-[20px] lg:pr-[26px] y-scrollbar">
          <BarChart weeklyActivity={weeklyActivity} />
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
