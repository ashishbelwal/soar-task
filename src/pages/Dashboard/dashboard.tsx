import MyCards from "../../features/MyCards";
import { RecentTransaction } from "../../features/RecentTransaction";

const Dashboard = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="w-screen lg:w-2/3">
              <MyCards />
            </div>
            <div className="w-full lg:w-1/3">
              <RecentTransaction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
