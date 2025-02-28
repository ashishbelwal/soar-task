import CreditCard from "../../components/CreditCard";
import { Link } from "react-router";
const AllCards = () => {
  return (
    <div className="mx-auto mb-[100px]">
      <div className="flex items-center gap-2 mb-6 text-secondary">
        <Link to="/" className="hover:text-gray-900">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-primary">All Cards</span>
      </div>
      <div className="w-full flex flex-col gap-[30px]">
        <div className="flex flex-col lg:flex-row gap-[30px] flex-wrap ">
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
          <CreditCard type="Visa" />
          <CreditCard type="Mastercard" />
        </div>
      </div>
    </div>
  );
};

export default AllCards;
