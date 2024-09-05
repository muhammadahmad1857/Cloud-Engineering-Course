import React from "react";
import Navbar from "./(components)/navbar";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const HomePage = () => {
  const products = [
    { img: "/product1.png", title: "Brushed Raglan Sweatshirt", price: "$195" },
    { img: "/product2.png", title: "Cameryn Sash Tie Dress", price: "$545" },
    { img: "/product3.png", title: "Flex Sweatshirt", price: "$175" },
  ];
  return (
    <div className="mx-6 md:mx-10">
      <Navbar />
      <header className="relative mb-16 mt-10 flex flex-col-reverse items-center max-md:gap-10 md:flex-row md:items-start md:justify-between">
        {/* Content Section */}
        <div className="flex h-[600px] flex-1 flex-col justify-between text-center md:ml-8 md:text-left">
          {" "}
          {/* Match the height of the hero image */}
          <div>
            <p className="mx-auto h-10 w-32 content-center rounded-md bg-[#E1EDFF] text-center text-[#0000FF] md:mx-0">
              Sale 70%
            </p>
            <h1 className="mt-4 font-[sora] text-3xl font-bold leading-tight md:text-5xl">
              An Industrial Take on Streetwear
            </h1>
            <p className="pt-4 font-[sora] text-base font-normal md:text-lg">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-gray-800">
              <FiShoppingCart className="mr-2 inline h-6 w-6" />
              Start Shopping
            </button>
          </div>
          {/* Container for Brand Logos */}
          <div className="mt-auto flex flex-wrap justify-center gap-6 pt-10 md:justify-start">
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

        <div className="relative flex items-center justify-center rounded-full bg-[#FFECE3] md:w-1/2 md:flex-none">
          <Image
            src="/hero.png"
            alt="Model"
            width={600}
            height={600}
            className="h-full w-full scale-110 cursor-pointer rounded-full transition-transform duration-1000 hover:scale-100 hover:shadow-lg hover:shadow-[#FFECE3]"
          />
        </div>
      </header>
      {/* Promotion section */}
      <p className="mt-20 text-center text-xs text-[#0062F5]">Promotions</p>
      <h2 className="text text-center font-[sora] text-3xl font-bold">
        Our Promotion Events
      </h2>
      <main className="mt-5 grid grid-cols-2 gap-4 font-[sora] md:grid-cols-4">
        <div className="order-1 col-span-2 flex cursor-pointer items-center justify-center bg-[#D6D6D8] sm:gap-32 md:order-1">
          <div className="px-2 text-center">
            <h1 className="text-nowrap text-xl font-bold uppercase sm:text-2xl">
              get up to{" "}
              <span className="text-2xl font-extrabold sm:text-3xl">60%</span>
            </h1>
            <p>For the summer season</p>
          </div>
          <div>
            <Image
              src="/event-banner-img1.png"
              height={200}
              width={260}
              alt="Banner model"
              className="transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>

        <div className="order-3 row-span-2 cursor-pointer bg-[#EFE1C7] md:order-2">
          <div className="p-4">
            <p className="text-base">Flex Sweatshirt</p>
            <p className="flex items-center gap-3 font-semibold">
              <span className="font-normal line-through">$100.00 </span> $75.00
            </p>
          </div>
          <div>
            <Image
              src="/horizantalbanner1.png"
              height={340}
              width={280}
              alt="horizantal banner model 1"
              className="transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>

        <div className="order-4 row-span-2 cursor-pointer bg-[#D7D7D9] md:order-3">
          <div className="p-4">
            <p className="text-base">Flex Push Button </p>
            <p className="flex items-center gap-3 font-semibold">
              <span className="font-normal line-through">$225.00</span> $190.00
            </p>
          </div>
          <div>
            <Image
              src="/horizantalbanner2.png"
              height={340}
              width={280}
              alt="horizantal banner model 1"
              className="transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>

        <div className="order-2 col-span-2 flex cursor-pointer flex-col items-center justify-center bg-[#212121] p-4 text-white md:order-4">
          <p className="mt-3 text-4xl font-extrabold">GET 30% Off</p>
          <p className="mt-5 text-sm uppercase">use promo code</p>
          <button className="rounded-lg bg-[#474747] px-4 py-5 uppercase transition-colors duration-500 hover:bg-[#3d3c3c]">
            dineweekendsale
          </button>
        </div>
      </main>
      {/* products page */}
      <p className="mt-20 text-center text-xs text-[#0062F5]">Products</p>
      <h2 className="text text-center font-[sora] text-3xl font-bold">
        Check What We Have
      </h2>
      <div className="mt-5 flex flex-col items-center gap-5 tab:flex-row tab:justify-between">
        {products.map((product) => {
          return (
            <div className="w-full mob:w-96" key={product.img}>
              <Image
                src={product.img}
                alt={product.title}
                width={200}
                height={200}
                className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-90"
              />
              <div>
                <h3 className="text-base font-semibold">{product.title}</h3>
                <p className="text-lg font-semibold">{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Design Section */}
      <div>
        <h1 className="mt-12 text-center font-[sora] text-2xl font-bold mob:text-end mob:text-3xl tab:text-5xl">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="mt-6 flex flex-col items-center gap-8 font-[sora] xl:flex-row xl:justify-between">
        <div className="relative grid grid-cols-1 gap-y-10 max-xl:place-items-center sm:grid-cols-2 xl:w-1/2">
          <p className="pointer-events-none absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 transform text-center text-5xl font-bold uppercase tracking-widest text-[#F2F3F7] sm:text-6xl lg:text-[76px]">
            Different <br /> from <br /> others
          </p>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              Using Good Quality Materials
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              100% Handmade Products
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              Modern Fashion Design
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              Discount for Bulk Orders
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 xl:w-1/2 xl:flex-row">
          <Image
            src="/design-section.png"
            alt="Design Section"
            width={300}
            height={300}
            className="h-full w-full object-cover sm:w-80"
          />
          <div className="text-center xl:text-left">
            <p className="font-light">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="mt-6 rounded-md bg-black px-5 py-3 font-semibold text-white transition-colors duration-500 hover:bg-[#2b2929]">
              See All Products
            </button>
          </div>
        </div>
      </div>
      {/* Subscribe to newsletter section */}
      <div className="relative mb-20 mt-20 flex flex-col items-center justify-center gap-4 font-[sora]">
        <p className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl font-bold uppercase tracking-widest text-[#F2F3F7] sm:block sm:text-6xl md:text-8xl">
          newsletter
        </p>
        <h1 className="z-10 text-3xl font-bold max-sm:text-center">
          Subscribe Our Newsletter
        </h1>
        <p className="z-10 text-base font-light max-sm:text-center">
          Get the latest information and promo offers directly
        </p>
        <div className="z-10 mt-2 flex flex-col gap-2 max-sm:w-full sm:flex-row">
          <input
            type="email"
            placeholder="Input Email Address"
            className="w-full border border-[#808080] px-5 py-3 sm:w-80"
          />
          <button className="rounded-md bg-black px-5 py-3 font-bold text-white transition-colors duration-500 hover:bg-[#2b2929]">
            Get Started
          </button>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="mb-10 flex flex-wrap justify-between gap-16 font-[sora]">
        <div className="flex w-96 flex-col gap-8 max-sm:items-center md:w-[500px]">
          <Image
            src="/logo.jpg"
            alt="Dine Market"
            className="cursor-pointer transition-transform duration-500 hover:scale-110"
            width={180}
            height={30}
          />
          <p className="max-sm:text-center">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={"https://x.com"}
              target="_blank"
              className="group flex w-10 items-center justify-center rounded-lg bg-[#f1f1f1] px-3 py-3 transition-colors duration-500 hover:bg-[#e0dede]"
            >
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                width={20}
                className="transition-transform duration-500 group-hover:scale-125"
                height={20}
              />
            </Link>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="group flex w-10 items-center justify-center rounded-lg bg-[#f1f1f1] px-3 py-3 transition-colors duration-500 hover:bg-[#e0dede]"
            >
              <Image
                src={"/facebook.svg"}
                alt="facebook"
                className="transition-transform duration-500 group-hover:scale-125"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={"https://linkedin.com/in/MuhammadAhmadJawad"}
              target="_blank"
              className="group flex w-10 items-center justify-center rounded-lg bg-[#f1f1f1] px-3 py-3 transition-colors duration-500 hover:bg-[#e0dede]"
            >
              <Image
                src={"/linkedin.svg"}
                className="transition-transform duration-500 group-hover:scale-125"
                alt="linkedin"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Company</h2>
          <div className="mt-4 flex flex-col gap-2 text-[#666666]">
            {[
              "About",
              "Terms of Use",
              "Privacy Policy",
              "How it Works",
              "Contact Us",
            ].map((value: string) => {
              return (
                <Link
                  href={"#"}
                  key={value}
                  className="transition-colors duration-500 hover:text-[#a8a5a5]"
                >
                  {value}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="max-mob:hidden">
          <h1 className="font-bold">Support</h1>
          <div className="mt-4 flex flex-col gap-2 text-[#666666]">
            {["Support Center", "24h Services", "Quick Chat"].map(
              (value: string) => {
                return (
                  <Link
                    href={"#"}
                    key={value}
                    className="transition-colors duration-500 hover:text-[#a8a5a5]"
                  >
                    {value}
                  </Link>
                );
              },
            )}
          </div>
        </div>
        <div>
          {" "}
          <h1 className="font-bold">Contact</h1>
          <div className="mt-4 flex flex-col gap-2 text-[#666666]">
            <Link
              href={"#"}
              className="transition-colors duration-500 hover:text-[#a8a5a5]"
            >
              Whatsapp
            </Link>
            <Link
              href={"#"}
              className="transition-colors duration-500 hover:text-[#a8a5a5]"
            >
              Support 24h
            </Link>
          </div>
        </div>
      </footer>
      {/* Copyright Footer */}
      <hr className="mx-0 border-[#666666] px-0" />{" "}
      {/* Add padding-top to ensure content is not overlapped by <hr> */}
      <div className="flex flex-col items-center justify-center gap-y-5 py-4 font-[sora] sm:flex-row sm:flex-wrap sm:justify-between">
        <p className="text-[#666666]">Copyright © 2024 Dine Market</p>
        <p>
          Designed by
          <strong className="cursor-pointer"> Weird Design Studio</strong>
        </p>
        <p className="text-nowrap">
          Code by
          <strong>
            <Link
              href={"https://github.com/muhammadahmad1857"}
              target="_blank"
              className="relative before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:transform before:rounded-md before:bg-black before:transition-all before:duration-500 hover:before:w-full"
            >
              &nbsp;muhammadahmad1857
            </Link>{" "}
            on github
          </strong>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
