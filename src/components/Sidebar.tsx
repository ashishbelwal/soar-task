import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router";
import { navigationOptions } from "../utils/utils";

const Sidebar = ({ closeSidebar }: { closeSidebar?: () => void }) => {
  const location = useLocation();
  const pathname = location.pathname;
  let navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = navigationOptions.findIndex(
      (option) => option.path === pathname
    );
    if (index !== -1) setActiveIndex(index);
  }, [pathname]);

  const handleNavigation = (pathname: string) => {
    closeSidebar?.();
    navigate(pathname);
  };

  return (
    <div className="lg:w-[250px] h-full bg-background">
      <div className="logo flex items-center justify-center max-w-[250px] w-full h-[100px] ">
        <img
          src="/soar.svg"
          alt="Soar Logo"
          width={23}
          height={35}
          className="p-[0px] mr-[16px]"
        />
        <h1 className="font-inter text-[25px] font-extrabold  text-textPrimary truncate">
          Soar Task
        </h1>
      </div>
      <div className="relative w-[250px] mt-[20px] h-[calc(100%-130px)] lg:mt-[110px] overflow-x-hidden overflow-y-auto">
        <motion.div
          className="absolute left-0 w-2 h-[60px] bg-foreground rounded-tr-[10px] rounded-br-[10px]"
          animate={{ top: activeIndex * 60 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
          }}
        />

        <ul className="relative m-0 p-0 list-none">
          {navigationOptions.map((option, index) => {
            const isActive = pathname === option.path;

            return (
              <li
                key={index}
                className={`relative flex items-center h-[60px] gap-4 py-[18px] px-[38px] rounded-lg cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "text-turtiary font-bold"
                    : "text-[#B1B1B1] hover:gap-5"
                }`}
                onClick={() => handleNavigation(option.path)}
              >
                <img
                  src={option.icon}
                  width={25}
                  height={25}
                  alt={option.name}
                  className={`${isActive ? "opacity-[1]" : "opacity-[0.4]"}`}
                />
                <span className="truncate">{option.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
