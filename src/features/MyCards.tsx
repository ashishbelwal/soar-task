import { useRef } from "react";
import { motion } from "framer-motion";
import CreditCard from "../components/CreditCard";
import SectionTitle from "../components/SectionTitle";
import LinkButton from "../components/LinkButton";

const MyCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
          <div className="lg:hidden w-[30px]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyCards;
