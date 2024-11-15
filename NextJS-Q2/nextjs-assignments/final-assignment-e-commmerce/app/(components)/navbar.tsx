"use client";

import React from "react";
import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";
import Search from "./search";
import CustomLayout from "./customLayout";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export default function Navbar() {
  const pathname = usePathname();
  const cartLength = useAppSelector(
    (state: RootState) => state.cart.items.length
  );
  return (
    <>
      <nav className="mt-4 hidden h-10 items-center justify-between lg:flex">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={140}
            height={25}
            className="cursor-pointer object-contain mix-blend-multiply"
          />
        </Link>

        <div className="flex items-center gap-2 xl:gap-6 text-sm font-bold  lg:text-base">
          {["Female", "Male", "Jewelery", "Products"].map((item) => {
            const link = `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === link;
            return (
              <Link
                href={link}
                key={item}
                className={`relative 
                  text-black
                 before:absolute before:bottom-0 before:left-1/2 before:h-1 ${
                   isActive ? "before:w-full" : "before:w-0"
                 } before:-translate-x-1/2 before:transform before:rounded-md
                 before:bg-black
                  before:transition-all before:duration-500 ${isActive?'hover:before:w-0':'hover:before:w-full'}`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* <div className="relative">
          <div className="flex items-center h-10 gap-2 border border-gray-300 rounded-md px-4 py-2 lg:w-96">
            <CiSearch className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full outline-none bg-transparent"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {searchTerm && (
            <div className="absolute top-full z-50 w-full bg-white shadow-lg rounded-md mt-1 max-h-60 overflow-y-auto">
              {isLoading ? (
                <p className="p-4 text-gray-600">Loading...</p>
              ) : searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    className="block p-4 hover:bg-gray-100"
                  >
                    <h3 className="text-base font-semibold text-gray-800">
                      {highlightMatch(product.title, searchTerm)}
                    </h3>
                  </Link>
                ))
              ) : (
                <p className="p-4 text-gray-600">No products found</p>
              )}
            </div>
          )}
        </div> */}
        <CustomLayout>
          {" "}
          <Search isSidebar={false} />
        </CustomLayout>
        <div className="flex gap-4 items-center ">
          <Link href="/cart">
            <button
              aria-label="View Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-500 hover:bg-gray-200"
            >
              <FiShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {cartLength || 0}
              </span>
            </button>
          </Link>
          <Link href={"/wishlist"}>
            <button className=" rounded-lg bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-gray-800">
              <FiHeart className="mr-2 inline h-6 w-6" />
              Wishlist
            </button>
          </Link>
        </div>
      </nav>

      <Sidebar />
    </>
  );
}
