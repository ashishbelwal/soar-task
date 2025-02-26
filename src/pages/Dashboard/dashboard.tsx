import MyCards from "../../features/MyCards";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <div className="w-screen lg:w-2/3">
              <MyCards />
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-300 h-20"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
