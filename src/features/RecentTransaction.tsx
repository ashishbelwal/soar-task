import SectionTitle from "../components/SectionTitle";
interface transactionProps {
  type: string;
  description: string;
  date: string;
  amount: number;
  source: string;
}
const Transaction = (transaction: transactionProps) => {
  return (
    <div className="flex w-full flex-row items-center rounded-full gap-[10px] lg:gap-[16px]">
      {transaction.source === "card" && (
        <div className="w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] bg-[#FFF5D9] rounded-full flex justify-center items-center">
          <img src="/public/icons/card.svg" alt="" />{" "}
        </div>
      )}
      {transaction.source === "paypal" && (
        <div className="w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] bg-[#E7EDFF] rounded-full flex justify-center items-center">
          <img src="/public/icons/paypal.svg" alt="" />{" "}
        </div>
      )}
      {transaction.source === "others" && (
        <div className="w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] bg-[#DCFAF8] rounded-full flex justify-center items-center">
          <img src="/public/icons/doller.svg" alt="" />{" "}
        </div>
      )}

      <div className="flex-auto">
        <h3 className="text-[14px] lg:text-[16px] font-semibold text-tertiary">
          {transaction.description}
        </h3>
        <p className="text-[12px] lg:text-[15px] text-secondary">
          {transaction.date}
        </p>
      </div>
      <div>
        <h3
          className={`text-[14px] lg:text-[16px] font-semibold ${
            transaction.type === "Debit" ? "text-danger" : "text-success"
          }`}
        >
          {transaction.type === "Debit" ? "-" : "+"}
          {transaction.amount}
        </h3>
      </div>
    </div>
  );
};
export const RecentTransaction = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-[30px]">
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
          <Transaction
            type={"Credit"}
            description={"Deposit from my Card"}
            date={"28 January 2021"}
            amount={5400}
            source={"others"}
          />
        </div>
      </div>
    </div>
  );
};
