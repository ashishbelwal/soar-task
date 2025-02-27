import SectionTitle from "../components/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../components/User";
import { useState } from "react";

const QuickTransfer = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const selectUser = (user: string) => {
    if (selectedUser === user) {
      setSelectedUser("");
    } else {
      setSelectedUser(user);
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Quick Transfer" />
      </div>
      <div className="w-full h-[200px] lg:h-[276px] rounded-[25px] bg-card-bg mt-[10px]">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="py-[20px] lg:py-[26px]"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 10,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 10,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div
            onClick={() => setSelectedUser("Livia Bator")}
            className="cursor-pointer"
          >
            <User
              name={"Livia Bator"}
              title={"CEO"}
              image={"/user-1.png"}
              selected={selectedUser === "Livia Bator" ? true : false}
            />
          </div>
          <div
            onClick={() => selectUser("Randy Press")}
            className="cursor-pointer"
          >
            <User
              name={"Randy Press"}
              title={"Director"}
              image={"/user-2.png"}
              selected={selectedUser === "Randy Press" ? true : false}
            />
          </div>
          <div onClick={() => selectUser("Workman")} className="cursor-pointer">
            <User
              name={"Workman"}
              title={"Designer"}
              image={"/user-3.png"}
              selected={selectedUser === "Workman" ? true : false}
            />
          </div>
          <div
            onClick={() => selectUser("Livia Bator")}
            className="cursor-pointer"
          >
            <User
              name={"Livia Bator"}
              title={"CEO"}
              image={"/user-1.png"}
              selected={selectedUser === "Livia Bator" ? true : false}
            />
          </div>
          <div
            onClick={() => selectUser("Randy Press")}
            className="cursor-pointer"
          >
            <User
              name={"Randy Press"}
              title={"Director"}
              image={"/user-2.png"}
              selected={selectedUser === "Randy Press" ? true : false}
            />
          </div>
          <div onClick={() => selectUser("Workman")} className="cursor-pointer">
            <User
              name={"Workman"}
              title={"Designer"}
              image={"/user-3.png"}
              selected={selectedUser === "Workman" ? true : false}
            />
          </div>
        </Carousel>
        <div className="p-[20px] lg:p-[26px]">
          <div className="flex items-center justify-between">
            <p className="text-secondary text-[12px] lg:text-[16px]">
              Write Amount
            </p>
            <div className="flex items-center">
              <input
                type="number"
                placeholder="Enter amount"
                disabled={selectedUser === ""}
                className="px-6 py-3  rounded-l-full focus:outline-none text-secondary placeholder:text-secondary bg-secondary-bg disabled:bg-[#fcfcfc]"
              />
              <button
                disabled={selectedUser === ""}
                className="flex items-center gap-2  px-7 py-3 ml-[-35px] bg-foreground text-white rounded-l-full rounded-r-full hover:bg-primary transition-colors disabled:opacity-50"
              >
                Send <img src="/icons/send.svg" alt="send" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
