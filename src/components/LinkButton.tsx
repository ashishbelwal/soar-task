import { Link } from "react-router-dom";

interface LinkButtonProps {
  title: string;
  navigateTo: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, navigateTo }) => {
  return (
    <Link
      className="text-[14px] lg:text-[17px] font-semibold text-primary hover:text-secondary transition-[0.3s]"
      to={navigateTo}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
