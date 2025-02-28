import SectionTitle from "../components/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../components/User";
import { useState } from "react";
import { useGetMyContactsQuery } from "../store/api";
import { carouselSettings } from "../components/Carousel/carousel.config";

const QuickTransfer = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [amount, setAmount] = useState<number>();
  const [success, setSuccess] = useState<boolean>(false);
  const {
    data: myContacts,
    isLoading,
    error: contactsError,
  } = useGetMyContactsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (contactsError) return <div>Error fetching contacts</div>;
  const selectUser = (user: string) => {
    if (selectedUser === user) {
      setSelectedUser("");
    } else {
      setSelectedUser(user);
    }
  };

  const handleTransfer = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    setAmount(0);
    setSelectedUser("");
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Quick Transfer" />
      </div>
      <div className="w-full h-[220px] max-w-[400px] sm:max-w-full mx-auto lg:h-[276px] rounded-[25px] bg-card-bg mt-[10px] overflow-hidden">
        <Carousel {...carouselSettings}>
          {myContacts?.map((contact) => (
            <div
              key={contact.id}
              onClick={() => selectUser(contact.name)}
              className="cursor-pointer"
            >
              <User
                name={contact.name}
                title={contact.title}
                image={contact.image}
                selected={selectedUser === contact.name ? true : false}
              />
            </div>
          ))}
        </Carousel>
        <div className=" relative  max-w-[400px] lg:max-w-full mx-auto">
          <div
            className={` p-[20px] lg:p-[26px] pt-0 lg:pt-0 items-center justify-between absolute top-0 w-full trasition-[0.3s] left-0 ${
              !success ? "flex" : "hidden"
            }`}
          >
            <p className="text-secondary text-[12px] lg:text-[16px]">
              Write Amount
            </p>
            <div className="flex items-center">
              <input
                type="number"
                placeholder={
                  selectedUser === "" ? "Select User" : "Enter amount"
                }
                disabled={selectedUser === ""}
                value={amount}
                onChange={(e) => setAmount(e.target.value as unknown as number)}
                className="px-6 py-3 rounded-l-full focus:outline-none text-secondary placeholder:text-secondary bg-secondary-bg disabled:bg-[#fcfcfc] w-full"
              />
              <button
                disabled={selectedUser === "" || !amount || amount <= 0}
                onClick={handleTransfer}
                className="px-[40px] py-3 ml-[-45px] rounded-l-full flex items-center justify-center gap-2 bg-foreground text-white rounded-r-full hover:bg-primary transition-colors disabled:bg-gray-400"
              >
                Send{" "}
                <img
                  src="/icons/send.svg"
                  className="w-[16px] sm:w-[16px] lg:w-[24px]"
                  alt="send"
                />
              </button>
            </div>
          </div>
          <div
            className={`flex p-[20px] lg:p-[26px] pt-0 lg:pt-0 items-center justify-between absolute top-0 w-full trasition-[0.3s] left-0 ${
              success ? "flex" : "hidden"
            }`}
          >
            <p className="text-success text-[12px] lg:text-[16px]">
              Amount has been transferred to {selectedUser} successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
