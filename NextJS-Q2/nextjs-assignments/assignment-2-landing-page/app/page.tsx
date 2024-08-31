import React from "react";
import Navbar from "./(components)/navbar";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="mx-2 md:mx-10">
      <Navbar />
      <header className="relative mb-10 mt-10 flex">
        <div className="flex flex-col">
          <div>
            <p className="h-10 w-32 content-center bg-[#E1EDFF] text-center text-[#0000FF]">
              Sale 70%
            </p>
            <h1 className="mt-4 font-[sora] text-5xl font-bold">
              An Industrial Take on Streetwear
            </h1>
            <p className="pt-6 font-[sora] text-base font-normal">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <button className="mt-16 flex w-72 items-center justify-center bg-black p-4 text-white transition-colors duration-300 hover:bg-gray-800">
              <FiShoppingCart className="mr-2 h-6 w-6" />
              Start Shopping
            </button>
          </div>
          <div className="absolute bottom-0 left-0 flex items-center justify-around gap-10">
            <Image
              src="/bazaar.png"
              alt="Bazaar"
              width={100}
              height={35}
              className="cursor-pointer transition-all duration-1000 hover:scale-125"
            />
            <Image
              src="/bustle.png"
              alt="Bustle"
              width={100}
              height={35}
              className="cursor-pointer transition-all duration-1000 hover:scale-125"
            />
            <Image
              src="/versace.png"
              alt="Versace"
              width={100}
              height={35}
              className="cursor-pointer transition-all duration-1000 hover:scale-125"
            />
            <Image
              src="/instyle.png"
              alt="InStyle"
              width={100}
              height={35}
              className="cursor-pointer transition-all duration-1000 hover:scale-125"
            />
          </div>
        </div>
        <div className="relative flex h-[500px] w-[500px] cursor-pointer items-center justify-center rounded-full bg-[#FFECE3]">
          <Image
            src="/hero.png"
            alt="Model"
            width={650}
            height={650}
            className="absolute -top-6 h-[550px] w-[550px] transition-transform duration-1000 hover:scale-75"
          />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
