import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[0] lg:w-[250px] h-full overflow-hidden content">
        <Sidebar />
      </div>
      <div className="w-full lg:w-[calc(100%-250px)] h-full">
        <Navbar />
        <div className="w-full h-full bg-background lg:bg-secondary-bg border border-[1px] border-[#E6EFF5] p-[20px] lg:p-[40px] y-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
