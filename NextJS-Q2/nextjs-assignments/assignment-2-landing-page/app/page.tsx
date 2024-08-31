import React from "react";
import Navbar from "./(components)/navbar";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="mx-2 md:mx-10">
      <Navbar />
      <header className="relative flex flex-col-reverse max-md:gap-10 md:flex-row items-center md:items-start md:justify-between mt-10 mb-16">
        
        {/* Content Section */}
        <div className="flex-1 md:ml-8 text-center md:text-left flex flex-col justify-between h-[600px]">  {/* Match the height of the hero image */}
          <div>
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
          </div>

          {/* Container for Brand Logos */}
          <div className="mt-auto flex flex-wrap justify-center md:justify-start gap-6 pt-10">
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
   
        <div className="relative md:flex-none md:w-1/2 flex items-center justify-center rounded-full bg-[#FFECE3]">
          <Image
            src="/hero.png"
            alt="Model"
            width={600}
            height={600}
            className="w-full h-full scale-110 hover:shadow-lg rounded-full hover:shadow-[#FFECE3] transition-transform duration-1000 hover:scale-100"
          />
        </div>
      </header>

      {/* Promotion section */}
      <p className="text-[#0062F5] text-center text-xs">Promotions</p>
      <h2 className="text font-[sora] text-center text-3xl font-bold">Our Promotion Events</h2>
      <main className="gap-4 font-[sora] grid grid-cols-2 md:grid-cols-4 ">
  
  <div className="flex justify-center sm:gap-32 bg-[#D6D6D8] items-center col-span-2 cursor-pointer order-1 md:order-1">
    <div className="text-center ">
      <h1 className="uppercase font-bold sm:text-2xl text-xl text-nowrap">get up to <span className="font-extrabold sm:text-3xl text-2xl ">60%</span></h1>
      <p>For the summer season</p>
    </div>
    <div>
      <Image src="/event-banner-img1.png" height={200} width={260} alt="Banner model" className="hover:scale-90 transition-transform duration-500"/>
    </div>
  </div>
  
  <div className="row-span-2 bg-[#EFE1C7] cursor-pointer order-3 md:order-2">
    <div className="p-4">
      <p className="text-base">Flex Sweatshirt</p>
      <p className="flex items-center gap-3 font-semibold"><span className="line-through font-normal">$100.00 </span> $75.00</p>
    </div>
    <div>
      <Image src="/horizantalbanner1.png" height={340} width={280} alt="horizantal banner model 1"  className="hover:scale-90 transition-transform duration-500" />
    </div>
  </div>
  
  <div className="row-span-2 bg-[#D7D7D9] cursor-pointer order-4 md:order-3">
    <div className="p-4">
      <p className="text-base">Flex Push Button Bomber</p>
      <p className="flex items-center gap-3 font-semibold"><span className="line-through font-normal">$225.00</span> $190.00</p>
    </div>
    <div>
      <Image src="/horizantalbanner2.png" height={340} width={280} alt="horizantal banner model 1" className="hover:scale-90 transition-transform duration-500"/>
    </div>
  </div>
  
  <div className="flex text-white justify-center flex-col items-center col-span-2 p-4 bg-[#212121] cursor-pointer order-2 md:order-4">
    <p className="text-4xl font-extrabold mt-3">GET 30% Off</p>
    <p className="text-sm uppercase mt-5">use promo code</p>
    <button className="bg-[#474747] rounded-lg px-4 py-5 uppercase transition-colors duration-500 hover:bg-[#3d3c3c]">dineweekendsale</button>
  </div>      
  
</main>

    </div>
  );
};

export default HomePage;
