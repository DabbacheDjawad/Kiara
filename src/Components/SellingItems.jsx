import image1 from '../assets/images/product-item-6.jpg'
import image2 from '../assets/images/product-item-5.jpg'
import image3 from '../assets/images/product-item-4.jpg'
import image4 from '../assets/images/product-item-3.jpg'
import image5 from '../assets/images/product-item-2.jpg'
import image6 from '../assets/images/product-item-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PevArrow from './PevArrow'
import NextArrow from './NextArrow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SellingItems = () => {

    const [hoveredIndex , setHoveredIndex] = useState(null);
    
    //carousel
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:<PevArrow className="translate-x-56"/>, 
        nextArrow:<NextArrow />,
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

//for the NEW ARRIVALS array
    const item1 = {
        image : image1,
        title : "BAGGY SHIRT",
        price : "$55.00"
    }
    const item2 = {
        image : image2,
        title : "COTTON OFFWHITE SHIRT",
        price : "$65.00"
    }
    const item3 = {
        image : image3,
        title : "CROP SWEATER",
        price : "$50.00"
    }
    const item4 = {
        image : image4,
        title : "CROP SWEATER",
        price : "$70.00"
    }
    const item5 = {
        image : image5,
        title : "DARK FLOURISH ONE PIECE",
        price : "$95.00"
    }
    const item6 = {
        image : image6,
        title : "WHITE SHIRT",
        price : "$55.00"
    }

    const sellingItems = [item1 , item2 , item3 , item4 , item5 , item6];


  return (
    <div className='py-24'>
        <h1 className='uppercase hover:underline text-4xl lg:ml-[11%] xl:ml-[11%] lg:text-start xl:text-start sm:text-center xm:text-center sm:ml-0 xm:ml-0'>Best Selling Items</h1>
        <div className='flex gap-1 flex-wrap w-full mt-10 items-center'> 

        <Slider {...settings} className='w-[80%] mx-auto z-0'>
            {
                sellingItems.map((item , index) => (
                    <li key={index} className='list-none w-[20%] mx-auto px-4'>
                        <div>
                            <img src={item.image} height={300} width={400} alt="image2"
                            className='transition-transform hover:scale-95'
                            onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)} />

                            <FontAwesomeIcon icon={faHeart} className={`${hoveredIndex === index?"opacity-100":"opacity-0"} p-1 absolute
                            z-50 ml-5 top-8 h-7 w-auto bg-white transition-opacity rounded`} color='#F72C5B'/>
                        </div>
                        <a href="#">{item.title}</a>
                        <p>{item.price}</p>
                    </li>
                ))
            }
        </Slider>

    </div>
</div>
  )
}

export default SellingItems
