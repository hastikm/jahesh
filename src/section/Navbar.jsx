import { useState } from "react";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import logo from '../assets/Logo.svg'
import pic from '../assets/Avatar.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[88px] flex items-center justify-between px-6 font-peyda14 border-b-2 border-mycolor sticky top-0 z-50 bg-white">

    
      <div className="flex items-center gap-2">
        <p className="hidden sm:block text-[0.80rem] leading-tight">
          <span className="font-bold mr-5">Jahesh</span> <br /> innovation
        </p>
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>

   
      <ul className="hidden lg:flex items-center gap-8 font-semibold text-[1rem] ml-[10rem]">
        <li className="menu-item">رویدادها</li>
        <li className="menu-item">جهش پارک</li>
        <li className="menu-item">سرمایه گذاری</li>
        <li className="menu-item">جهش مدیا</li>
        <li className="menu-item flex items-center gap-1">
          جهش <IoIosArrowDown size={14} />
        </li>
      </ul>

      <div className="flex items-center gap-4 lg:hidden w-full justify-between">
        <p className="text-sm font-bold mx-auto">نوآوری باز</p>
        <GiHamburgerMenu
          size={24}
          className="text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-start gap-6 p-4 font-semibold text-[1rem]">
          <li>رویدادها</li>
          <li>جهش پارک</li>
          <li>سرمایه گذاری</li>
          <li>جهش مدیا</li>
          <li className="flex items-center gap-1">
            جهش <IoIosArrowDown size={14} />
          </li>
        </ul>
      </div>

      
      <div className="hidden lg:flex items-center gap-2">
        <img src={pic} alt="profile" className="w-10 h-10 rounded-full" />
        <p className="font-semibold text-xs">سمانه احمدی</p>
        <IoIosNotificationsOutline size={24} className="mr-7" />
      </div>
    </nav>
  );
};

export default Navbar;
