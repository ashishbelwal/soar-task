import { useRef } from "react";
import { motion } from "framer-motion";
import CreditCard from "../components/CreditCard";
import SectionTitle from "../components/SectionTitle";
import LinkButton from "../components/LinkButton";
import { useGetCardsQuery } from "../store/api";

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

const MyCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: cards, isLoading, error } = useGetCardsQuery();

  if (isLoading) return <div>Loading cards...</div>;
  if (error) {
    console.log("API Error:", error);
    return (
      <div className="text-red-500">
        {isErrorWithMessage(error)
          ? error.data?.message || "Failed to fetch cards"
          : "An error occurred while fetching cards"}
      </div>
    );
  }
  if (!cards || cards.length === 0) return <div>No cards found</div>;

  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[8px]">
        <SectionTitle title="My Card" />
        <LinkButton title={"See All"} navigateTo={"all-cards"} />
      </div>
      <div
        ref={containerRef}
        className="w-screen lg:w-full overflow-hidden p-[10px]"
      >
        <motion.div
          className="flex w-max justify-start gap-[30px] cursor-grab"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.8}
          dragTransition={{ power: 0.2, timeConstant: 200 }}
        >
          {cards.map((card: any) => (
            <CreditCard key={card.id} card={card} />
          ))}
          <div className="lg:hidden w-[30px]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyCards;
