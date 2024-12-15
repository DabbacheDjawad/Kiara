import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PevArrow = ({onClick }) => {
  return (
    <button
      className="text-5xl p-4 sm:p-2 xm:p-2 rounded-full border cursor-pointer text-main-medium-grey text-opacity-50 hover:text-opacity-85
       border-grey lg:absolute lg:-ml-24 lg:top-[45%] md:mb-12 md:ml-[45%] sm:ml-[45%] sm:mb-12 xm:ml-[45%] xm:mb-12"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="h-10 w-10 py-2"/>
    </button>
  );
};

export default PevArrow;
