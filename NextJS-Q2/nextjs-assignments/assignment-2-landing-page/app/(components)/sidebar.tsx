"use client";
import React from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="block md:hidden">
      {/* Navbar */}
      <div
        className={`flex items-center justify-between py-2 ${
          isOpen
            ? "h-screen bg-white shadow-lg backdrop-blur-lg backdrop-filter"
            : ""
        } transition-all duration-500`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={140}
            height={25}
            className={`cursor-pointer object-contain mix-blend-multiply`}
          />
        </Link>

        {/* Search Bar */}
        <div
          className={`hidden h-10 rounded-md border lg:w-64 ${
            isOpen ? "bg-white text-black" : ""
          } items-center gap-2 border-gray-300 px-2 py-2 transition-colors duration-300 focus-within:border-gray-500 sm:flex`}
        >
          <button
            aria-label="Search"
            className="flex h-8 w-8 cursor-pointer items-center justify-center transition-transform duration-500 hover:scale-125"
          >
            <CiSearch className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className={`flex-1 outline-none ${
              isOpen ? "bg-white text-black" : ""
            } px-2 py-1 text-sm`}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="flex items-center justify-center md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </div>

      {/* Full-Screen Sidebar */}
      <div
        className={`rounded-md fixed right-0 top-0 h-screen w-full transform bg-[#E1EDFF] text-black ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 overflow-y-auto transition-transform duration-500`}
      >
        {/* Navbar inside Sidebar */}
        <div className="flex items-center justify-between bg-white p-4 shadow-lg">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={140}
              height={25}
              className="cursor-pointer object-contain mix-blend-multiply"
            />
          </Link>

          {/* Search Bar */}
          <div
            className={`hidden h-10 rounded-md border lg:w-64 ${
              isOpen ? "bg-white text-black" : ""
            } items-center gap-2 border-gray-300 px-2 py-2 transition-colors duration-300 focus-within:border-gray-500 sm:flex`}
          >
            <button
              aria-label="Search"
              className="flex h-8 w-8 cursor-pointer items-center justify-center transition-transform duration-500 hover:scale-125"
            >
              <CiSearch className="h-5 w-5" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className={`flex-1 outline-none ${
                isOpen ? "bg-white text-black" : ""
              } px-2 py-1 text-sm`}
            />
          </div>

          {/* Hamburger Icon */}
          <div className="flex items-center justify-center md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </div>
        </div>
        <div className="mt-2 flex w-full items-center gap-2 rounded-md border border-[#abacb3] px-2 py-4 transition-colors duration-300 focus-within:border-[#A0A3B1] sm:hidden">
          <button
            aria-label="Search"
            className="flex h-7 w-8 cursor-pointer items-center justify-center rounded-sm transition-all duration-500 hover:scale-125 hover:rounded-lg"
          >
            <CiSearch className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full outline-none"
          />{" "}
        </div>
        {/* Sidebar Links */}
        <div className="mt-4 flex w-full flex-col">
          {["Female", "Male", "Kids", "All Products"].map((item) => (
            <>
              <Link
                href="#"
                key={item}
                className="w-full bg-black p-4 text-center text-xl text-white transition-colors duration-300 hover:bg-gray-800"
              >
                {item}
              </Link>
              <hr />
            </>
          ))}
          <button className="mt-auto flex w-full items-center justify-center bg-black p-4 text-white transition-colors duration-300 hover:bg-gray-800">
            <FiShoppingCart className="mr-2 h-6 w-6" />
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
