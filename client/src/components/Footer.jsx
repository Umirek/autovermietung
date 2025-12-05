import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => { 
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-20 text-sm text-gray-500">
    <div clas="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor">
        <div className=''>
            <img className="h8 md:h9 " src={assets.logo} alt="Logo" />
            <p className="max-w-80 mt-3">Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            <div>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">QUICK LINKS</h3>
                <ul className="text-sm space-y-1">
                    <li><a href="#" className="hover:underline transition">Home</a></li>
                    <li><a href="#" className="hover:underline transition">Browse Cars</a></li>
                    <li><a href="#" className="hover:underline transition">List Your Car</a></li>
                    <li><a href="#" className="hover:underline transition">About Us</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">RESOURCES</h3>
                <ul className="text-sm space-y-1">
                    <li><a href="#" className="hover:underline transition">Delivery Information</a></li>
                    <li><a href="#" className="hover:underline transition">Return & Refund Policy</a></li>
                    <li><a href="#" className="hover:underline transition">Payment Methods</a></li>
                    <li><a href="#" className="hover:underline transition">Track your Order</a></li>
                    <li><a href="#" className="hover:underline transition">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">CONTACT</h3>
                <ul className="text-sm space-y-1">
                    <li><a className="hover:underline transition" >Instagram</a></li>
                    <li><a className="hover:underline transition">Twitter</a></li>
                    <li><a className="hover:underline transition">Facebook</a></li>
                    <li><a className="hover:underline transition">YouTube</a></li>
                </ul>
            </div>
        </div>
    </div>
    <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright {new Date().getFullYear()} © Brand All rights reserved.
      </p>
</footer>
  )
}

export default Footer