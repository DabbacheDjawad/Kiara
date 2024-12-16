import arct from '../assets/images/arct-icon.png'
import dhl from '../assets/images/dhl-logo.png'
import visa from '../assets/images/visa-card.png'
import paypal from '../assets/images/paypal-card.png'
import masterCard from '../assets/images/master-card.png'

const Footer = () => {
  return (
    <div className="w-[90%] flex md:flex-row lg:flex-row xl:flex-row md:justify-between flex-col lg:justify-between xl:justify-between mx-auto">
        <div className="flex">
            <p className="uppercase text-main-medium-grey">we ship with : </p>
            <img src={arct} alt="arct" />
            <img src={dhl} alt="dhl" />
            <p className="uppercase text-main-medium-grey ml-3">Payment Options : </p>
            <img src={visa} alt="visa" />
            <img src={paypal} alt="paypal" />
            <img src={masterCard} alt="masterCard" />
        </div>

        
        <div>
            <p className='text-strong-grey text-xl'>© Copyright 2022 Kaira. All rights reserved. Design by TemplatesJungle</p>
            <p className='text-strong-grey text-xl'>Distribution By ThemeWagon</p>
        </div>
    </div>
  )
}

export default Footer
