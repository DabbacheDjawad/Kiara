import image1 from '../assets/images/product-item-6.jpg'
import image2 from '../assets/images/product-item-5.jpg'
import image3 from '../assets/images/product-item-4.jpg'
import image4 from '../assets/images/product-item-3.jpg'
import image5 from '../assets/images/product-item-2.jpg'
import image6 from '../assets/images/product-item-1.jpg'
import blogImage1 from '../assets/images/post-image1.jpg'
import blogImage2 from '../assets/images/post-image2.jpg'
import blogImage3 from '../assets/images/post-image3.jpg'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PevArrow from './PevArrow'
import NextArrow from './NextArrow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const BlogAndAdditional = () => {
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
    const logos = [{img:logo1} , {img:logo2} , {img:logo3} , {img:logo4} , {img:logo5}];
    const blogItems = [
        {
            blogImage:blogImage1,
            blogDate:"FASHION / JUL 11 , 2024",
            blogTitle:"How to look outstanding in pastel",
            blogDescription:"Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla..."
        },

        {
            blogImage:blogImage2,
            blogDate:"FASHION / JUL 11 , 2024",
            blogTitle:"Top 10 fashion trend for summer",
            blogDescription:"Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus..."
        },

        {
            blogImage:blogImage3,
            blogDate:"FASHION / JUL 11 , 2024",
            blogTitle:"Crazy fashion with unique moment",
            blogDescription:"Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus..."
        },
    ];


  return (
    <div className='py-24'>
        <div className='flex justify-between'>
            <h1 className='uppercase hover:underline text-4xl lg:ml-[11%] xl:ml-[11%] lg:text-start xl:text-start
           md:text-start sm:text-center xm:text-center sm:ml-0 xm:ml-0 sm:w-full xm:w-full'>you may also like</h1>
            <h1 className='uppercase hover:underline text-2xl font-light lg:mr-[11%] xl:mr-[11%] lg:text-start xl:text-start
            sm:hidden xm:hidden lg:block md:block xl:block w-1/6'>view all</h1>
        </div>
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



    {/* BLOG */}
    <div className='mt-52'>
        <div className='flex justify-between'>
            <h1 className='uppercase hover:underline text-4xl lg:ml-[11%] xl:ml-[11%] lg:text-start xl:text-start
            md:text-start sm:text-center xm:text-center sm:ml-0 xm:ml-0 sm:w-full xm:w-full'>read blog posts</h1>
            <h1 className='uppercase hover:underline text-2xl font-light lg:mr-[11%] xl:mr-[11%] lg:text-start xl:text-start
            sm:hidden xm:hidden lg:block md:block xl:block w-1/6'>view all</h1>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row mt-12 gap-10 w-[80%] mx-auto'>
            {
                blogItems.map((item , index) =>(
                    <ul key={index}>
                        <li className='leading-[1.8rem]'>
                            <img src={item.blogImage} alt={`img${index+1}`} className='mb-5' />
                            <p className='text-main-medium-grey font-light text-2xl'>{item.blogDate}</p>
                            <h1 className='font-thin text-3xl mb-2'>{item.blogTitle}</h1>
                            <p className='text-main-medium-grey text-xl'>{item.blogDescription}</p>
                        </li>
                    </ul>
                ))
            }
        </div>
    </div>


    {/* LOGOS */}
    <div className='flex flex-col lg:flex-row xl:flex-row gap-16 mt-16 py-16 w-full items-center
     lg:justify-center xl:justify-center '>
        {
            logos.map((logo , index) => (
                <ul key={index}>
                    <li>
                        <img src={logo.img} alt={`logo${index+1}`} className='h-[60px]' />
                    </li>
                </ul>
            ))
        }
    </div>

</div>
  )

}

export default BlogAndAdditional
