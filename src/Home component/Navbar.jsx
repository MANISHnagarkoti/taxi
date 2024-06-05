import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-black fixed left-0 right-0 z-[999]">
        <nav className="container flex  justify-between items-center py-3  text-white ">
          <div className="text-4xl font-bold">My Taxi</div>

          <div className="md:flex gap-9 hidden ">
            <button className="rounded-full bg-white px-6 py-3 text-black font-semibold">
              Get a ride
            </button>

            <ul className="flex gap-6 items-center text-sm">
              <li>DRIVER</li>
              <li>RIDER</li>
              <li>BUSINESS</li>
              <li>LOG IN</li>
              <li>SIGN IN</li>
            </ul>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer block md:hidden "
            onClick={()=> setShow(!show)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>

        
        </nav>


          {/* {{{{{{{{mobile navbar}}}}}}}} */}

          <div
            className={`fixed top-[60px] w-full z-50 text-white bg-black h-screen left-0 flex flex-col items-center justify-center translate-y-[-200px] opacity-0 transition-all duration-200 pointer-events-none ${
              show && `!translate-y-0 !opacity-100 pointer-events-auto`
            }`}
          >
            <ul className="items-center text-2xl space-y-8">
              <li>DRIVER</li>
              <li>RIDER</li>
              <li>BUSINESS</li>
              <li>LOG IN</li>
              <li>SIGN IN</li>
            </ul>

            <button className="rounded-full bg-white px-6 py-3 text-black font-semibold mt-9">
              Get a ride
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
