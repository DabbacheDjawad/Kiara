import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Comments = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
    }

    const comments = [
        {
            bigText:"Best fitted white denim shirt more white denim than expected flexible crazy soft.",
            smallText : "denim craze"
        },

        {
            bigText:"Best fitted white denim shirt more than expected crazy soft, flexible",
            smallText : "uptop"
        },

        {
            bigText:"“Best fitted white denim shirt more than expected crazy soft",
            smallText : "denim craze"
        },

        {
            bigText:"Best fitted white denim shirt more than expected crazy soft, flexible",
            smallText : "uptop"
        }
    ];
  return (
    <div className="bg-main-light-grey w-full font-serif py-16">
        <h1 className="font-semibold text-center text-3xl w-full">we love good compliment</h1>

        <div className="py-12 w-full">
            <Slider className="w-[100%] mx-auto" {...settings}>
                {
                    comments.map((comment , index) =>(
                        <ul key={index}>
                            <li>
                                <blockquote className="lg:w-1/2 xl:w-1/2 md:w-2/3 mx-auto lg:text-5xl md:text-3xl sm:text-3xl xm:text-2xl
                                 font-semibold text-main-medium-grey font-serif text-center leading-[3.8rem]">
                                    {comment.bigText}
                                </blockquote>
                                <p className="text-center text-2xl text-main-medium-grey mt-4">
                                    {comment.smallText}
                                </p>
                            </li>
                        </ul>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Comments
