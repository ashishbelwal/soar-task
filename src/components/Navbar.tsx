import { useLocation } from "react-router";
import Search from "./Search";
import Settings from "./Settings";
import Notification from "./Notification";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getPageTitle } from "../utils/utils";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <div
        className={` h-full overflow-hidden fixed z-10 transition-[0.3s] block lg:hidden ${
          toggleSidebar ? "w-full left-[0]" : "w-[0px] left-[-600px]"
        } ${toggleSidebar}`}
      >
        <div
          className={`w-full bg-foreground opacity-[0.1] h-full overflow-hidden fixed z-10 ${
            toggleSidebar ? "block" : "hidden"
          }`}
          onClick={() => setToggleSidebar(false)}
        ></div>
        <button
          type="button"
          onClick={() => setToggleSidebar(false)}
          className="-m-2.5 rounded-md p-2.5 absolute top-[50px] right-[50px] text-primary text-[30px] "
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>
        <div
          className={`w-[calc(100%-125px)] h-full overflow-hidden fixed z-10 ${
            toggleSidebar ? "block" : "hidden"
          }`}
        >
          <Sidebar closeSidebar={() => setToggleSidebar(false)} />
        </div>
      </div>
      <div className="w-full bg-bacground py-[20px]  items-center flex-col">
        <div className="flex items-center justify-between px-[25px] lg:px-[40px] w-full">
          <button
            type="button"
            className="block lg:hidden"
            onClick={() => setToggleSidebar(true)}
          >
            <img
              src="/icons/menu.svg"
              alt="menu"
              width={14}
              height={18}
              style={{ width: "14px", height: "18px" }}
            />
          </button>
          <h2 className="font-inter text-[20px] lg:text-[28px] font-semibold  text-textPrimary">
            {getPageTitle(pathname)}
          </h2>
          <div className="hidden lg:flex items-center justify-end gap-[20px] ">
            <Search />
            <Settings />
            <Notification />
            <Profile />
          </div>
          <div className="flex lg:hidden items-center justify-end gap-[20px] ">
            <Profile />
          </div>
        </div>
        <div className="flex lg:hidden px-[20px] w-full">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Navbar;
