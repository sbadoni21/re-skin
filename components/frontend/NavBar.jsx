"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt1, HiShoppingCart } from "react-icons/hi";
import { IoCloseCircleSharp } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" py-2">
      <div className="bg-background03 h-16 mx-10 md:mx-20 rounded-xl flex justify-between items-center p-2 ">
        <button onClick={toggleMenu}>
          {!isOpen ? (
            <HiOutlineMenuAlt1 className=" text-32px transition-all duration-500 ease-in-out delay-700" />
          ) : (
            <IoCloseCircleSharp className="text-32px  transition-all duration-500 ease-in-out delay-700" />
          )}
        </button>

        <button onClick={""}>
          <HiShoppingCart className="text-[28px]" />
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden absolute w-40 md:w-96 ${
          isOpen ? "max-h-48 md:min-h-96" : "max-h-0"
        } bg-background02 mx-10 md:mx-20 rounded-xl mt-2`}
      >
        <ul className="p-4  md:space-y-10 md:text-[25px]"   >
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Services</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
