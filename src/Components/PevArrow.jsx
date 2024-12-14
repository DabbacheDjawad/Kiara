const PevArrow = ({onClick }) => {
  return (
    <button
      className="text-5xl p-4 sm:p-2 xm:p-2 rounded-full border cursor-pointer text-main-medium-grey border-grey
      lg:absolute lg:-ml-24 lg:top-[45%] md:mb-12 md:ml-[45%] sm:ml-[45%] sm:mb-12 xm:ml-[45%] xm:mb-12"
      onClick={onClick}
    >
      ←
    </button>
  );
};

export default PevArrow;
