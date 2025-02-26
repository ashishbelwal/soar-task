const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-[16px] font-semibold lg:text-[22px] text-primary">
      {title}
    </h3>
  );
};

export default SectionTitle;
