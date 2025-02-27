import SectionTitle from "../components/SectionTitle";
import { Transaction } from "../components/Transection";

export const RecentTransaction = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Recent Transection" />
      </div>
      <div className="w-full h-[200px] lg:h-[235px] rounded-[25px] p-[20px] pr-0 lg:p-[26px] lg:pr-0 bg-card-bg mt-[10px]">
        <div className="flex flex-col gap-[8px] w-full h-full pr-[20px] lg:pr-[26px] y-scrollbar">
          <Transaction
            type={"Debit"}
            description={"Deposit from my Card"}
            date={"28 January 2021"}
            amount={850}
            source={"card"}
          />
          <Transaction
            type={"Credit"}
            description={"Deposit from my Card"}
            date={"28 January 2021"}
            amount={2500}
            source={"paypal"}
          />
          <Transaction
            type={"Credit"}
            description={"Deposit from my Card"}
            date={"28 January 2021"}
            amount={5400}
            source={"others"}
          />
          {/* <Transaction
            type={"Credit"}
            description={"Deposit from my Card"}
            date={"28 January 2021"}
            amount={5400}
            source={"others"}
          /> */}
        </div>
      </div>
    </div>
  );
};
