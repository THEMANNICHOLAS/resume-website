import React, { useRef } from "react";
import { assets } from "../../../assets/assets.js";
import Image from "next/image.js";

const Navbar = () => {

    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    return (
        <>
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
            <Image
            src={assets.images.gradientBlur} alt="Gradient Blur" className="w-full h-full object-cover"/>
        </div>

            <nav className='w-full fixed px-5 lg:px-8, x1:px-[8%] py-4
            flex items-center justify-between z-50'>
                <a href="#top">
                    <Image src={assets.logo} 
                    className='w-28 cursor-pointer mr-14'></Image>
                </a>
                <ul 
                className = 
                'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                    <li><a href="#top" className="transition-colors duration-200 hover:text-blue-400" >Home</a></li>
                    <li><a href="#about" className="transition-colors duration-200 hover:text-blue-400">About Me</a></li>
                    <li><a href="#work" className="transition-colors duration-200 hover:text-blue-400">My Projects</a></li> 
                    <li><a href="#contact" className="transition-colors duration-200 hover:text-blue-400">Contact Me</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    <a href="#contact" 
                    className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
                    rounded-full ml-4 transition-transform duration-200 hover:scale-105'>
                        Contact 
                    <Image src={assets.images.contact_logo} alt='email' className='w-3'/>
                    </a>

                    <button className="block md:hidden ml-4" onClick = {openMenu}>
                        <Image src={assets.images.menuIcon} alt='null' className='w-8 h-8'/>
                    </button>

                </div>
                {/*---------------Mobile Menu-------------------*/}
                <ul ref ={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-[#E0F7FF] transition duration-500">
                    <div className='absolute right-6 top-6' onClick ={closeMenu}>
                        <Image src={assets.images.crossIcon} alt='null' className='w-5 cursor-pointer'/>
                    </div>
                    <li><a href="#top" onClick ={closeMenu} className="transition-colors duration-200 hover:text-blue-400">Home</a></li>
                    <li><a href="#about" onClick ={closeMenu} className="transition-colors duration-200 hover:text-blue-400">About Me</a></li>
                    <li><a href="#work" onClick ={closeMenu} className="transition-colors duration-200 hover:text-blue-400">My Projects</a></li> 
                    <li><a href="#contact" onClick ={closeMenu} className="transition-colors duration-200 hover:text-blue-400">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )

}

export default Navbar;