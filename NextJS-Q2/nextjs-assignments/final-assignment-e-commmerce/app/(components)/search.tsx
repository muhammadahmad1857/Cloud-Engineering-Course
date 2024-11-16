"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchProducts, Product } from "../redux/slices/productSlice";
import { RootState } from "../redux/store";
import Link from "next/link";

interface SearchProps {
  isSidebar: boolean;
}

const Search: React.FC<SearchProps> = ({ isSidebar }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { products } = useAppSelector((state: RootState) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim()) {
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredProducts);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, products]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const highlightMatch = (text: string, term: string) => {
    if (!term.trim()) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, index) => (
      <span
        key={index}
        className={
          part.toLowerCase() === term.toLowerCase()
            ? "text-gray-900 font-bold"
            : ""
        }
      >
        {part}
      </span>
    ));
  };

  return (
    <div
      className={`relative ${
        isSidebar ? "w-full sm:flex hidden" : "xl:w-96 lg:w-72"
      }`}
    >
      <div
        className={`items-center h-10 gap-2 border border-gray-300 w-full rounded-md px-4 py-2  flex 
            ${
              !isSidebar &&
              "max-md:hidden max-sm:flex max-sm:w-full max-sm:mt-2 max-sm:rounded-md max-sm:border max-sm:border-[#abacb3] max-sm:px-2 max-sm:py-4 max-sm:transition-colors max-sm:duration-300 focus-within:border-[#A0A3B1]"
            } `}
      >
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
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block p-4 cursor-pointer hover:bg-gray-100"
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
    </div>
  );
};

export default Search;
