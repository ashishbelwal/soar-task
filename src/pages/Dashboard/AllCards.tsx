import CreditCard from "../../components/CreditCard";
import { Link } from "react-router";
import { useGetCardsQuery } from "../../store/api";
const AllCards = () => {
  const { data: cards, isLoading, error } = useGetCardsQuery();

  if (isLoading) return <div>Loading cards...</div>;
  if (error) {
    console.log("API Error:", error);
    return (
      <div className="text-red-500">An error occurred while fetching cards</div>
    );
  }
  if (!cards || cards.length === 0) return <div>No cards found</div>;
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
          {cards.map((card: any) => (
            <CreditCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCards;
