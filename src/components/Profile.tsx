import { Link } from "react-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Profile = () => {
  return (
    <>
      <Link
        to={"/settings"}
        className="lg:flex hidden lg:w-[60px] lg:h-[60px] bg-[url('/icons/user-image.png')] bg-cover rounded-full flex items-center justify-center cursor-pointer "
      ></Link>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="flex lg:hidden w-[36px] h-[36px] bg-[url('/icons/user-image.png')] bg-cover rounded-full flex items-center justify-center cursor-pointer"></MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <Link
                to="settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                <img
                  src="/icons/settings.svg"
                  alt="settings"
                  width={16}
                  height={16}
                  className="mr-2"
                />{" "}
                <span className="mt-[0.2px]">Settings</span>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="notification"
                className="flex item-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                <img
                  src="/icons/notification-active.svg"
                  alt="settings"
                  width={16}
                  height={16}
                  className="mr-2"
                />{" "}
                <span className="mt-[0.2px]">Notifications</span>
              </Link>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </>
  );
};

export default Profile;
