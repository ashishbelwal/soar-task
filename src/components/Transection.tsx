import { Transection } from "../types";

export const Transaction = (transaction: Transection) => {
  return (
    <div className="flex w-full flex-row items-center rounded-full gap-[10px] lg:gap-[16px]">
      {transaction.source === "card" && (
        <div className="w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] bg-[#FFF5D9] rounded-full flex justify-center items-center">
          <img src="/icons/card.svg" alt="" />{" "}
        </div>
      )}
      {transaction.source === "paypal" && (
        <div className="w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] bg-[#E7EDFF] rounded-full flex justify-center items-center">
          <img src="/icons/paypal.svg" alt="" />{" "}
        </div>
      )}
      {transaction.source === "others" && (
        <div className="w-[50px] h-[50px] lg:w-[55px] lg:h-[55px] bg-[#DCFAF8] rounded-full flex justify-center items-center">
          <img src="/icons/doller.svg" alt="" />{" "}
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
            transaction.type === "debit" ? "text-danger" : "text-success"
          }`}
        >
          {transaction.type === "debit" ? "-" : "+"}
          {transaction.amount}
        </h3>
      </div>
    </div>
  );
};
