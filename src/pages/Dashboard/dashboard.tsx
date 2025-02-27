import BalanceHistory from "../../features/BalanceHistory";
import ExpenseStatistics from "../../features/ExpenseStatistics";
import MyCards from "../../features/MyCards";
import QuickTransfer from "../../features/QuickTransfer";
import { RecentTransaction } from "../../features/RecentTransaction";
import WeeklyActivity from "../../features/WeeklyActivity";

const Dashboard = () => {
  return (
    <>
      <div className="mx-auto mb-[100px]">
        <div className="w-full flex flex-col gap-[30px]">
          <div className="flex flex-col lg:flex-row gap-[30px] ">
            <div className="w-full lg:w-[calc(2/3*100%-30px)] ">
              <MyCards />
            </div>
            <div className="w-full lg:w-1/3">
              <RecentTransaction />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="w-full lg:flex-1">
              <WeeklyActivity />
            </div>
            <div className="w-full lg:w-1/3">
              <ExpenseStatistics />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="w-full lg:w-2/5">
              <QuickTransfer />
            </div>
            <div className="w-full lg:flex-1">
              <BalanceHistory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
