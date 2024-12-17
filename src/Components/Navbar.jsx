import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

    const[navigation , setNavigation] = useState(false);

    function handleNavigation(){
        setNavigation(!navigation);
        
    }
  return (
    <div className="font-f flex w-full justify-between py-6 bg-main-light-grey items-center max-h-24 shadow-md">
        <div className="text-4xl ml-10 md:ml-20 xm:ml-3">KIARA</div>
        {/* page sections */}
        <div className={`px-1 lg:block `}>
            <ul className={`text-emphasis-grey transition-all hover:[&>li]:text-black text-xl
            lg:gap-16 lg:justify-center lg:items-center lg:flex flex-col lg:flex-row  
             bg-main-light-grey ${navigation == true?
            "sm:mt-16 xm:mt-16 sm:w-full xm:w-full sm:text-2xl absolute sm:left-0 xm:left-0 sm:text-center xm:text-center md:text-center":"hidden"}`} 
            >
                <li className="hover:text-black transition-colors duration-200"><a href="#">Home</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Shop</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Blog</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Pages</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Blog</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Contact</a></li>
            </ul>
        
        {/* responsive button */}
            <div>
                <button className="text-3xl mx-auto md:block sm:block lg:hidden xl:hidden border rounded px-3 py-1" onClick={handleNavigation}>☰</button>
            </div>
        </div>


        {/* wishList  --  Cart */}
        <div className="flex sm:text-center md:mr-0 items-center sm:mr-10 mr-20 xm:mr-2 xm:text-xl text-[1.3rem] 
         gap-10 xm:gap-4 text-emphasis-grey">
            <a className="text-black transition-colors duration-200 xm:hidden lg:block md:block xl:block " href="#">wishList()</a>
            <a className="text-black transition-colors duration-200 xm:hidden lg:block md:block xl:block" href="#">Cart()</a>
            <a href="#" className="text-black xm:mr-10"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
        </div>
    </div>
  )
}

export default Navbar
