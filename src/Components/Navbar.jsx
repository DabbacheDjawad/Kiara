import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

    const[navigation , setNavigation] = useState(false);

    function handleNavigation(){
        setNavigation(!navigation);console.log(navigation);
        
    }
  return (
    <div className="font-f flex w-full justify-between sticky py-6 bg-main-light-grey items-center max-h-24 shadow-md">
        <div className="text-4xl ml-10">KIARA</div>
        {/* page sections */}
        <div className={`px-1 lg:block `}>
            <ul className={`text-emphasis-grey transition-all hover:[&>li]:text-black text-xl ml-32 sm:ml-0
            lg:gap-16 lg:justify-center lg:items-center lg:flex flex-col lg:flex-row  
             sm:bg-main-light-grey ${navigation == true?
            "flex sm:mt-16 sm:w-full sm:text-3xl absolute sm:left-0 sm:text-center md:text-center":"hidden"}`} >
                <li className="hover:text-black transition-colors duration-200"><a href="#">Home</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Shop</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Blog</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Pages</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Blog</a></li>
                <li className="hover:text-black transition-colors duration-200"><a href="#">Contact</a></li>
            </ul>
        
        {/* responsive button */}
            <div>
                <button className="text-3xl ml-20 md:block sm:block lg:hidden border rounded px-3 py-1" onClick={handleNavigation}>☰</button>
            </div>
        </div>


        {/* wishList  --  Cart */}
        <div className="flex justify-center items-center sm:mr-10 mr-20 text-[1.3rem] gap-10 text-emphasis-grey">
            <a className="text-black transition-colors duration-200" href="#">wishList()</a>
            <a className="text-black transition-colors duration-200" href="#">Cart()</a>
            <a href="#" className="text-black"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
        </div>
    </div>
  )
}

export default Navbar
