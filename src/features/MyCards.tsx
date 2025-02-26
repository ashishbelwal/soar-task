import { useRef } from "react";
import { motion } from "framer-motion";
import CreditCard from "../components/CreditCard";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router";

const MyCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="flex justify-between items-center w-full mb-[20px]">
        <SectionTitle title="My Card" />
        <Link
          className="text-[14px] lg:text-[17px] font-semibold hover:opacity-[0.8]"
          to={"all-cards"}
        >
          See All{" "}
        </Link>
      </div>
      <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          className="flex w-max justify-start gap-[30px] cursor-grab"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.8}
          dragTransition={{ power: 0.2, timeConstant: 200 }}
        >
          <CreditCard />
          <CreditCard />
          <CreditCard />
          <CreditCard />
          <div className="lg:hidden w-[30px]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyCards;
