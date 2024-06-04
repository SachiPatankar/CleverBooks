import React, { useState } from 'react'
import brand from '../assets/brand.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the visibility of the menu
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <div className='bg-[#151218] text-white flex p-4 justify-between'> 

    <div className='text-3xl flex gap-3 pl-5'><img src={brand} className='h-8 w-8'></img> Clever Books</div>


    <div className='hidden md:flex gap-10 mr-4 '>
    <div className='flex gap-7'>
    <button>Product</button>
    <button>Product</button>
    <button>Product</button>
    <button>Product</button>
    </div>

    <button className='text-[#E1869E] hover:border-[#E1869E]'>Login</button>
    <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-2xl text-md'>SignUp</button>

    
    </div>

    
    <div className='md:hidden'>
    <button onClick={toggleMenu}>
        <svg className='h-6 w-6 mr-4 mt-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ffffff"></path> </g></svg>
    </button>

    <div
          className={`${
            !menuOpen ? "hidden" : "flex"
          } p-6 bg-[#151218] absolute top-20 right-0 mx-4 my-0 min-w-[140px] rounded-xl sidebar text-white`}
        >

          

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          <li className={`mb-4`}>
              <button>My Profile</button>
            </li>
            <li className={`mb-4`}>
              <button>My Profile</button>
            </li>
            <li className={`mb-4`}>
              <button>My Profile</button>
            </li>
            <li className={`mb-4`}>
              <button>My Profile</button>
            </li>
            
          </ul>

        </div> 
    </div>

    </div>
  )
}

export default Navbar

