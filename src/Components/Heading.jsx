import image1 from '../assets/images/banner-image-1.jpg'
import image2 from '../assets/images/banner-image-2.jpg'
import image3 from '../assets/images/banner-image-3.jpg'
import image4 from '../assets/images/banner-image-4.jpg'
import image5 from '../assets/images/banner-image-5.jpg'
import image6 from '../assets/images/banner-image-6.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Heading = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024, // Screens <= 1024px
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600, // Screens <= 600px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };

    return (
    <div className="pt-24 font-f bg-main-light-grey">
        <div className="mb-10 w-full"><p className="font-f font-medium text-6xl text-black text-center
            xm:text-3xl sm:text-4xl md:text-5xl">
        NEW COLLECTIONS</p></div>
        <div className="lg:w-[35%] xl:w-[35%] lg:ml-[32%] xl:ml-[32%] lg:text-[1.2em] xl:text-[1.2em] xm:w-[90%] xm:ml-2"><p className="font-f text-main-medium-grey text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum
             consequuntur, adipisci repellat
            ! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo
             voluptatibus harum, quibusdam ex repellat eaque!</p></div>

        {/* photos Carousel */}
        <div className="mt-10 flex w-full pb-32">
        <Slider {...settings} className={`w-[100%]`}>    
            {/* im1 */}
            <div className='w-[400px]'>
                <img src={image1} alt="image1" className='h-[500px] w-[400px] rounded outline-none lg:ml-0 xl:ml-[10%] xm:ml-0
                sm:ml-0 md:ml-0 transition-transform hover:scale-95'/>
                <div>
                    <div><p className="font-f font-medium text-[1.9em] text-center">Soft Leather Jackets</p></div>
                    <div><p className="font-f text-main-medium-grey text-center text-[1.2em] w-[70%] ml-[10%] ">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p></div>
                    <div className='md:ml-[10%] lg:ml-[10%] xl:ml-[10%] xm:ml-0 sm:ml-0'><p className='bold font-extralight font-f text-2xl hover:underline xm:text-center'>Discover Now</p></div>
                </div>
            </div>

            {/* im2 */}
            <div>
                <img src={image2} alt="image2" className='h-[500px] w-[400px] rounded outline-none ml-[10%] transition-transform hover:scale-95
                 lg:ml-0 xl:ml-[10%] xm:ml-0 sm:ml-0'/>
                <div>
                    <div><p className="font-f font-medium text-[1.9em] text-center">Soft Leather Jackets</p></div>
                    <div><p className="font-f text-main-medium-grey text-center text-[1.2em] w-[70%] ml-[10%]">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p></div>
                    <div className='md:ml-[10%] lg:ml-[10%] xl:ml-[10%] xm:ml-0 sm:ml-0'><p className='bold font-extralight font-f text-2xl hover:underline xm:text-center'>Discover Now</p></div>   
                </div>
            </div>


            {/* im3 */}
            <div>
                <img src={image3} alt="image3" className='h-[500px] w-[400px] rounded outline-none ml-[10%] transition-transform hover:scale-95 lg:ml-0 xl:ml-[10%] xm:ml-0 sm:ml-0' />
                <div>
                    <div><p className="font-f font-medium text-[1.9em] text-center">Soft Leather Jackets</p></div>
                    <div><p className="font-f text-main-medium-grey text-center text-[1.2em] w-[70%] ml-[10%]">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p></div>
                    <div className='md:ml-[10%] lg:ml-[10%] xl:ml-[10%] xm:ml-0 sm:ml-0'><p className='bold font-extralight font-f text-2xl hover:underline xm:text-center'>Discover Now</p></div>
                </div>
            </div>


            {/* im4 */}
            <div>
                <img src={image4} alt="image4" className='h-[500px] w-[400px] rounded outline-none ml-[10%] transition-transform hover:scale-95 lg:ml-0 xl:ml-[10%] xm:ml-0 sm:ml-0'/>
                <div>
                    <div><p className="font-f font-medium text-[1.9em] text-center">Soft Leather Jackets</p></div>
                    <div><p className="font-f text-main-medium-grey text-center text-[1.2em] w-[70%] ml-[10%]">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p></div>
                    <div className='md:ml-[10%] lg:ml-[10%] xl:ml-[10%] xm:ml-0 sm:ml-0'><p className='bold font-extralight font-f text-2xl hover:underline xm:text-center'>Discover Now</p></div>              
                </div>
            </div>


            {/* im5 */}
            <div>
                <img src={image5} alt="image5" className='h-[500px] w-[400px] rounded outline-none ml-[10%] transition-transform hover:scale-95 lg:ml-0 xl:ml-[10%] xm:ml-0 sm:ml-0' />
                <div>
                    <div><p className="font-f font-medium text-[1.9em] text-center">Soft Leather Jackets</p></div>
                    <div><p className="font-f text-main-medium-grey text-center text-[1.2em] w-[70%] ml-[10%]">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p></div>
                    <div className='md:ml-[10%] lg:ml-[10%] xl:ml-[10%] xm:ml-0 sm:ml-0'><p className='bold font-extralight font-f text-2xl hover:underline xm:text-center'>Discover Now</p></div>
                </div>
            </div>


            {/* im6 */}
            <div>
                <img src={image6} alt="image6" className='h-[500px] w-[400px] rounded outline-none ml-[10%] transition-transform hover:scale-95 lg:ml-0 xl:ml-[10%] xm:ml-0 sm:ml-0'/>
                <div>
                    <div><p className="font-f font-medium text-[1.9em] text-center">Soft Leather Jackets</p></div>
                    <div><p className="font-f text-main-medium-grey text-center text-[1.2em] w-[70%] ml-[10%]">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p></div>
                    <div className='md:ml-[10%] lg:ml-[10%] xl:ml-[10%] xm:ml-0 sm:ml-0'><p className='bold font-extralight font-f text-2xl hover:underline xm:text-center'>Discover Now</p></div>
                </div>
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default Heading
