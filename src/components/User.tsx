interface UserProp {
  name: string;
  title: string;
  image: string;
  selected: boolean;
}

const User = ({ name, title, image, selected }: UserProp) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt={name}
        className="w-[50px] lg:w-[70px] rounded-full mb-[12px] lg:mb-[16px]"
      />
      <h3
        className={`text-[12px] lg:text-[16px] text-turtiary ${
          selected ? "font-bold" : "font-medium"
        } `}
      >
        {name}
      </h3>
      <p
        className={`text-[12px] lg:text-[14px] text-secondary truncate ${
          selected ? "font-semibold" : "font-medium"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default User;
