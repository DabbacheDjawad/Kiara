import textImage from "../assets/images/text-pattern.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const VideoSection = () => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat bg-videoImage h-[800px] mb-24 flex`}
    >
      <a
        href="https://www.youtube.com/@Dabbache-Djawad"
        target="_blank"
        className="m-auto"
      >
        <img
          src={textImage}
          alt="img"
          className=" align-middle z-0 animate-rotation"
        />
        <FontAwesomeIcon
          icon={faPlay}
          className=" text-white h-16 translate-x-[230%] -translate-y-[230%]"
        />
      </a>
    </div>
  );  
};

export default VideoSection;
//
