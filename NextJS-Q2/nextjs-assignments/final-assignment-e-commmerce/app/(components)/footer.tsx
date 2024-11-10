import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="my-10 flex flex-wrap justify-between gap-16 font-[sora]">
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
              }
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
    </>
  );
};

export default Footer;
