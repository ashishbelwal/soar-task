export const CardFront = ({ type }: { type: string }) => {
  return (
    <div
      className={`w-[265px] lg:w-[350px] snap-center user-select-none cursor-grab cursor-pointer h-[200px] lg:h-[235px] flex-shrink-0
          rounded-[25px] overflow-hidden relative text-white hover:scale-102 transition-[0.3s] 
          ${
            type === "Visa"
              ? "bg-gradient-to-br from-[#5b5a6f] to-black text-quaternary"
              : "text-primary bg-[#ffffff]"
          } `}
      draggable // Make the credit card draggable
      onDragStart={(e) => e.preventDefault()} // Prevent text selection while dragging
    >
      {/* Card Header */}
      <div className="flex justify-between items-center p-[20px] lg:p-[26px]">
        <div>
          <p
            className={`text-[11px] lg:text-[12px] p-0 ${
              type === "Visa" ? "" : "text-secondary"
            }`}
          >
            Balance
          </p>
          <p
            className={`text-[16px] lg:text-[20px] font-semibold p-0 ${
              type === "Visa" ? "" : "text-primary"
            }`}
          >
            $5,756
          </p>
        </div>
        <div
          className={`w-[35px] h-[35px] bg-cover ${
            type === "Visa" ? "bg-[url(/chip.png)]" : "bg-[url(/chip-dark.png)]"
          }`}
        ></div>
      </div>

      {/* Card Body */}
      <div className="flex flex-row gap-[30px] px-[20px] lg:px-[26px] pb-[20px] lg:pb-[26px]">
        <div className="w-1/2">
          <p
            className={`text-[10px] lg:text-[12px] p-0 ${
              type === "Visa" ? "text-[#ffffff70]" : "text-secondary"
            }`}
          >
            CARD HOLDER
          </p>
          <p
            className={`text-[13px] lg:text-[15px] p-0 font-semibold ${
              type === "Visa" ? "" : "text-primary"
            }`}
          >
            Eddy Cusuma
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

      {/* Card Footer */}
      <div
        className={`flex flex-row gap-[30px] px-[20px] lg:px-[26px] py-[20px] h-[70px] relative ${
          type === "Visa"
            ? "bg-gradient-to-br from-[#ffffff30] to-transparent"
            : "bg-[#ffffff] border-t-[1px] border-t-[#DFEAF2]"
        }`}
      >
        <div className="w-full">
          <p
            className={`text-[15px] lg:text-[22px] font-semibold p-0 ${
              type === "Visa" ? "text-[#ffffff]" : "text-primary"
            }`}
          >
            3778 **** **** 1234
          </p>
        </div>
        <div className="absolute right-[26px]">
          {type === "Visa" ? (
            <img src="/mastercard.png" alt="Visa" />
          ) : (
            <img src="/mastercard-dark.png" alt="Mastercard" />
          )}
        </div>
      </div>
    </div>
  );
};
