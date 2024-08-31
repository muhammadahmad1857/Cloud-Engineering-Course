import React from "react";
import Navbar from "./(components)/navbar";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="mx-2 md:mx-10">
      <Navbar />
      <header className="relative flex flex-col-reverse  max-md:gap-10 md:flex-row items-center md:items-start md:justify-between mt-10 mb-16">
        
        {/* Content Section */}
        <div className="flex-1 md:ml-8 text-center md:text-left">
          <p className="h-10 w-32 mx-auto md:mx-0 bg-[#E1EDFF] content-center text-center text-[#0000FF] rounded-md">
            Sale 70%
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold font-[sora] leading-tight">
            An Industrial Take on Streetwear
          </h1>
          <p className="pt-4 text-base md:text-lg font-normal font-[sora]">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg transition-colors duration-300 hover:bg-gray-800">
            <FiShoppingCart className="inline mr-2 h-6 w-6" />
            Start Shopping
          </button>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
            <Image
              src="/bazaar.png"
              alt="Bazaar"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src="/bustle.png"
              alt="Bustle"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src="/versace.png"
              alt="Versace"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src="/instyle.png"
              alt="InStyle"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        {/* Hero Image Section */}
        {/* <div className="flex-1 md:flex-none md:w-1/2 relative flex items-center justify-center">
          <Image
            src="/hero.png"
            alt="Model"
            width={600}
            height={600}
            className="w-full h-auto md:w-[500px] md:h-[500px] object-cover rounded-full hover:shadow-lg hover:shadow-[#FFECE3] transition-transform duration-1000 hover:scale-105"
          />
        </div>  */}
        <div className="relative md:flex-none md:w-1/2  flex items-center rounded-full justify-center bg-[#FFECE3]">
          <Image
            src="/hero.png"
            alt="Model"
            width={600}
            height={600}
            className="w-full h-full scale-110    hover:shadow-lg rounded-full hover:shadow-[#FFECE3] transition-transform duration-1000 hover:scale-100"
          />
        </div>

      </header>
    </div>
  );
};

export default HomePage;
