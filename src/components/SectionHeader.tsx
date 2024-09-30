const SectionHeader = ({
  title,
  titleTwo,
}: {
  title: string;
  titleTwo: string;
}) => {
  return (
    <>
      <h2 className="title text-5xl xs:text-6xl sm:text-7xl font-black font-name">
        {title}
      </h2>
      <h5 className="text-xl font-name pb-5">{titleTwo}</h5>
      <div className="w-1/2 h-px bg-secondary mb-5" />
    </>
  );
};

export default SectionHeader;
