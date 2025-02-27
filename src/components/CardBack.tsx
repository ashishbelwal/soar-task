export const CardBack = ({ type }: { type: string }) => {
  return (
    <div
      className={`w-[265px] lg:w-[350px] snap-center user-select-none cursor-pointer h-[200px] lg:h-[235px] flex-shrink-0
        rounded-[25px] overflow-hidden relative text-white hover:scale-102 transition-[0.3s] flex items-center
        ${
          type === "Visa"
            ? "bg-gradient-to-br from-[#5b5a6f] to-black text-quaternary"
            : "text-primary bg-[#ffffff]"
        } `}
    >
      <div className="flex w-full flex-row gap-[30px] px-[20px] lg:px-[26px] pb-[20px] lg:pb-[26px]">
        <div className="w-1/2 ">
          <p
            className={`text-[10px] lg:text-[12px] p-0 ${
              type === "Visa" ? "text-[#ffffff70]" : "text-secondary"
            }`}
          >
            CVV
          </p>
          <p
            className={`text-[13px] lg:text-[15px] p-0 font-semibold ${
              type === "Visa" ? "" : "text-primary"
            }`}
          >
            576
          </p>
        </div>
        <div className="w-1/2">
          <p
            className={`text-[10px] lg:text-[12px] p-0 ${
              type === "Visa" ? "text-[#ffffff70]" : "text-secondary"
            }`}
          >
            VALID THRU
          </p>
          <p
            className={`text-[13px] lg:text-[15px] font-semibold p-0 ${
              type === "Visa" ? "" : "text-primary"
            }`}
          >
            12/22
          </p>
        </div>
      </div>
    </div>
  );
};
