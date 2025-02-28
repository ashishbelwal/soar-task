import SectionTitle from "../components/SectionTitle";
import { Transaction } from "../components/Transection";
import { useGetRecentTransectionQuery } from "../store/api";
interface ErrorWithMessage {
  status: number;
  data: {
    message: string;
  };
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as any).data?.message === "string"
  );
}
export const RecentTransaction = () => {
  const {
    data: transections,
    isLoading,
    error,
  } = useGetRecentTransectionQuery();
  if (isLoading) return <div>Loading transections...</div>;
  if (error) {
    console.log("API Error:", error);
    return (
      <div className="text-red-500">
        {isErrorWithMessage(error)
          ? error.data?.message || "Failed to fetch transections"
          : "An error occurred while fetching transections"}
      </div>
    );
  }
  if (!transections || transections.length === 0)
    return <div>No transections found</div>;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full mb-[18px]">
        <SectionTitle title="Recent Transection" />
      </div>
      <div className="w-full h-[200px] lg:h-[235px] rounded-[25px] p-[20px] pr-0 lg:p-[26px] lg:pr-0 bg-card-bg mt-[10px]">
        <div className="flex flex-col gap-[8px] w-full h-full pr-[20px] lg:pr-[26px] y-scrollbar">
          {transections.map((transection) => (
            <Transaction
              key={transection.id}
              type={transection.type}
              description={transection.description}
              date={transection.date}
              amount={transection.amount}
              source={transection.source}
              status={transection.status}
              id={transection.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
