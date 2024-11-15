"use client";

import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import CustomLayout from "./customLayout";
import Search from "./search";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartLen = useAppSelector((state: RootState) => state.cart.items.length);
  return (
    <div className="block lg:hidden">
      {/* Navbar */}
      <div
        className={`flex items-center justify-between py-2 ${
          isOpen ? "bg-white shadow-lg backdrop-blur-lg backdrop-filter" : ""
        } transition-all duration-500`}
      >
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
        <CustomLayout>
          <Search isSidebar={true} />
        </CustomLayout>

        {/* Hamburger Icon */}
        <div className="flex items-center justify-center lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </div>

      {/* Full-Screen Sidebar */}
      <div
        className={`fixed bottom-0 right-0 top-0 h-screen w-full transform bg-white text-black backdrop-filter ${
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

          <CustomLayout>
            <Search isSidebar={true} />
          </CustomLayout>
          {/* Hamburger Icon */}
          <div className="flex items-center justify-center lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="mt-4 flex w-full flex-col">
          {["Female", "Male", "Jewelery", "Products"].map((item) => (
            <React.Fragment key={item}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="w-full bg-black p-4 text-center text-xl text-white transition-colors duration-300 hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
              <hr />
            </React.Fragment>
          ))}
          <Link
            href="/cart"
            className="mt-auto flex w-full items-center justify-center bg-black p-4 text-white transition-colors duration-300 hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiShoppingCart className="mr-2 h-6 w-6" />
            Cart ({cartLen})
          </Link>
          <hr />
          <Link
            href="/wishlist"
            className="mt-auto flex w-full items-center justify-center bg-black p-4 text-white transition-colors duration-300 hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiHeart className="mr-2 h-6 w-6" />
            Wishlist
          </Link>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full">
          <hr className="bg-black" />
          <p className="py-2 text-center">
            Made With ❤️ by{" "}
            <Link
              className="relative before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:transform before:rounded-md before:bg-black before:transition-all before:duration-500 hover:before:w-full"
              href="https://github.com/muhammadahmad1857"
            >
              Muhammad Ahmad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
