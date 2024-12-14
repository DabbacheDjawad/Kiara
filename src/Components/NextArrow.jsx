import React from "react";

const NextArrow = ({onClick }) => {
  return (
    <button
      className="text-5xl p-4 sm:p-2 xm:p-2 rounded-full border cursor-pointer text-main-medium-grey border-grey
       lg:absolute lg:-right-28 lg:top-[35%] lg:mr-4 md:ml-[45%] md:mt-12 sm:ml-[45%] sm:mt-14  xm:ml-[45%] xm:mt-12"
      onClick={onClick}
    >
      →
    </button>
  );
};

export default NextArrow;
