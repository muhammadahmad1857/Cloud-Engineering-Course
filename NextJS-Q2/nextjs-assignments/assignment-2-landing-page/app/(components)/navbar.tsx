"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="mt-4 hidden h-10 items-center justify-between md:flex">
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

        {/* Nav list links */}
        <div className="flex items-center gap-6 text-sm font-bold lg:gap-12 lg:text-base">
          {["Female", "Male", "Kids", "All Products"].map((item) => (
            <Link
              href="#"
              key={item}
              className="relative before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:transform before:rounded-md before:bg-black before:transition-all before:duration-500 hover:before:w-full"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Search bar */}
        <div className="hidden h-7 items-center gap-2 rounded-md border border-[#E4E5EB] px-2 py-4 transition-colors duration-300 focus-within:border-[#A0A3B1] sm:flex lg:w-96">
          <button
            aria-label="Search"
            className="flex h-7 w-8 cursor-pointer items-center justify-center rounded-sm transition-all duration-500 hover:scale-125 hover:rounded-lg"
          >
            <CiSearch className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none"
          />
        </div>

        {/* Cart icon */}
        <Link href="#">
          <button
            aria-label="View Cart"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F1F1F1] transition-colors duration-500 hover:bg-[#d3d0d0]"
          >
            <FiShoppingCart className="absolute right-5 top-5 h-6 w-6" />
            <span className="absolute bottom-7 left-7 h-5 w-5 rounded-full bg-[#F02D34] text-sm text-white">
              0
            </span>
          </button>
        </Link>
      </nav>

      {/* When the screen is smaller this component will show */}
      <Sidebar />
    </>
  );
};

export default Navbar;
