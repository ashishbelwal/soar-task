import { Link } from "react-router";

const Notification = () => {
  return (
    <>
      <Link
        to={"notifications"}
        className="w-[50px] h-[50px] bg-secondary-bg rounded-full flex items-center justify-center hover:bg-primary transition-[0.3s]"
      >
        <img
          src="/icons/notification-active.svg"
          alt="settings"
          width={25}
          height={25}
        />
      </Link>
    </>
  );
};

export default Notification;
