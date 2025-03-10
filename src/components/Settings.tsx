import { Link } from "react-router";

const Settings = () => {
  return (
    <>
      <Link
        to={"settings"}
        className="w-[50px] h-[50px] bg-secondary-bg rounded-full flex items-center justify-center hover:bg-[#d6e7ff] transition-[0.5s]"
      >
        <img src="/icons/settings.svg" alt="settings" width={25} height={25} />
      </Link>
    </>
  );
};

export default Settings;
