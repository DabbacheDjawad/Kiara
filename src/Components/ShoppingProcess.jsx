import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons'
import image1 from '../assets/images/cat-item1.jpg'
import image2 from '../assets/images/cat-item2.jpg'
import image3 from '../assets/images/cat-item3.jpg'
import prImage1 from '../assets/images/product-item-1.jpg'
import prImage2 from '../assets/images/product-item-2.jpg'
import prImage3 from '../assets/images/product-item-3.jpg'
import prImage4 from '../assets/images/product-item-4.jpg'
import prImage5 from '../assets/images/product-item-5.jpg'
import prImage6 from '../assets/images/product-item-6.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PevArrow from './PevArrow'
import NextArrow from './NextArrow'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const ShoppingProcess = () => {

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



    //for the process array
    const appointment = {
        icon : <FontAwesomeIcon icon={faCalendar} style={{color: "#787878",}} className='text-4xl' />,
        title : "Book an appointment",
        description : "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    }
    const pickUp = {
        icon : <FontAwesomeIcon icon={faBagShopping} style={{color: "#787878",}} className='text-4xl'/>,
        title : "Pick Up in Store",
        description : "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    }
     const packaging = {
        icon : <FontAwesomeIcon icon={faGift} style={{color: "#787878",}} className='text-4xl'/>,
        title : "special Packaging",
        description : "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    }
    const returns = {
        icon :<FontAwesomeIcon icon={faArrowsSpin} style={{color: "#787878",}} className='text-4xl'/>,
        title : "Free Global Returns",
        description : "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    }



    //for the "Shopping types array"


    const men = {
        image : image1,
        description : "Shop for Men"
    }
    const women = {
        image : image2,
        description : "Shop for women"
    }
    const accessories = {
        image : image3,
        description : "Shop Accessories"
    }



    //for the NEW ARRIVALS array
    const arrival1 = {
        image : prImage1,
        title : "BAGGY SHIRT",
        price : "$55.00"
    }
    const arrival2 = {
        image : prImage2,
        title : "COTTON OFFWHITE SHIRT",
        price : "$65.00"
    }
    const arrival3 = {
        image : prImage3,
        title : "CROP SWEATER",
        price : "$50.00"
    }
    const arrival4 = {
        image : prImage4,
        title : "CROP SWEATER",
        price : "$70.00"
    }
    const arrival5 = {
        image : prImage5,
        title : "DARK FLOURISH ONE PIECE",
        price : "$95.00"
    }
    const arrival6 = {
        image : prImage6,
        title : "WHITE SHIRT",
        price : "$55.00"
    }

    const process = [appointment , pickUp , packaging , returns];
    const shoppingTypes = [men , women , accessories];
    const newArrivals = [arrival1 , arrival2 , arrival3 , arrival4 , arrival5 , arrival6];
  return (
    <div className="mt-32 pb-32"> {/*section div*/}
        <div className='w-full mx-auto flex gap-10 flex-wrap md:ml-auto'> {/*icons container*/}
            {
                process.map((item , index) =>(
                    <li key={index} className='list-none text-center w-60 mx-auto'>
                        <span className='ml-auto'>{item.icon}</span>
                        <p className='bold text-3xl py-4 font-f'>{item.title}</p>
                        <p className='font-f text-lg text-main-medium-grey'>{item.description}</p>
                    </li>
                ))
            }
        </div> 


        {/*shop categories container*/}
        <div className='flex gap-8 flex-wrap w-full mt-20'>   
        {
                shoppingTypes.map((type , index) =>(
                    <li key={index} className='list-none w-[30%] mx-auto'>
                        <img src={type.image} alt="model" height={300} width={400} className='hover:scale-95 transition-transform'/>
                        <a href='#' className='bold text-2xl py-4 font-f md:text-xl sm:text-lg uppercase text-main-medium-grey hover:underline'>{type.description}</a>
                    </li>
                ))
            }
        </div>      


            <div className='mt-32 text-center text-4xl hover:underline'><p>NEW ARRIVALS</p></div>


        {/*new arrivals container*/}
        <div className='flex gap-1 flex-wrap w-full mt-10 items-center'> 
                <Slider {...settings} className='w-[80%] mx-auto z-0'>
                    {
                        newArrivals.map((arriv , index) => (
                            <li key={index} className='list-none w-[20%] mx-auto px-4'>
                                <div>
                                    <img src={arriv.image} height={300} width={400} alt="image2"
                                     className='transition-transform hover:scale-95'
                                     onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)} />

                                    <FontAwesomeIcon icon={faHeart} className={`${hoveredIndex === index?"opacity-100":"opacity-0"} p-1 absolute
                                     z-50 ml-5 top-8 h-7 w-auto bg-white transition-opacity `}/>
                                </div>
                                <a href="#">{arriv.title}</a>
                                <p>{arriv.price}</p>
                            </li>
                        ))
                    }
                </Slider>

        </div>
    </div>
  )
}

export default ShoppingProcess