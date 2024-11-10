// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";
// import Link from "next/link";
// import Sidebar from "./sidebar";
// import { useAppSelector, useAppDispatch } from "../redux/hooks";
// import { fetchProducts, Product } from "../redux/slices/productSlice";
// import { RootState } from "../redux/store";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const { products } = useAppSelector((state: RootState) => state.products);
//   const dispatch = useAppDispatch();
//   const pathname = usePathname();
//   const [searchTerm, setSearchTerm] = useState("mens");
//   const [searchResults, setSearchResults] = useState<Product[]>([]);
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   setSearchResults(filteredProducts);
//   console.log("product", searchResults);

//   // const filteredProducts = () => {
//   //   const searchTermLower = searchTerm.toLowerCase().trim();
//   //   return products.filter((product) => {
//   //     const productTitleLower = product.title.toLowerCase();
//   //     console.log(`Searching for: "${searchTermLower}", in: "${productTitleLower}"`);  // Debugging line
//   //     return productTitleLower.includes(searchTermLower);
//   //   });
//   // };

//   // const searchResults = filteredProducts();

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     // filteredProducts();
//   };

//   const highlightMatch = (text: string, term: string) => {
//     const parts = text.split(new RegExp(`(${term})`, "gi"));
//     return parts.map((part, index) => (
//       <span
//         key={index}
//         className={
//           part.toLowerCase() === term.toLowerCase()
//             ? "text-gray-900 font-bold"
//             : ""
//         }
//       >
//         {part}
//       </span>
//     ));
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="mt-4 hidden h-10 items-center justify-between md:flex">
//         <Link href="/">
//           <Image
//             src="/logo.jpg"
//             alt="Logo"
//             width={140}
//             height={25}
//             className="cursor-pointer object-contain mix-blend-multiply"
//           />
//         </Link>

//         {/* Nav Links */}
//         <div className="flex items-center gap-6 text-sm font-bold lg:gap-12 lg:text-base">
//           {["Female", "Male", "Kids", "All Products"].map((item) => {
//             const link = `/${item.toLowerCase().replace(" ", "-")}`;
//             const isActive = pathname === link;
//             return (
//               <Link
//                 href={link}
//                 key={item}
//                 className={`relative ${
//                   isActive ? "text-theme-color" : "text-black"
//                 }
//                   before:absolute before:bottom-0 before:left-1/2 before:h-1
//                   before:w-0 before:-translate-x-1/2 before:transform
//                   before:rounded-md ${
//                     isActive ? "before:bg-theme-color" : "before:bg-black"
//                   }
//                   before:transition-all before:duration-500 hover:before:w-full`}
//               >
//                 {item}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Search Bar */}
//         <div className="relative">
//           <div className="flex items-center h-10 gap-2 border border-gray-300 rounded-md px-4 py-2 lg:w-96">
//             <CiSearch className="h-5 w-5 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search for products"
//               className="w-full outline-none bg-transparent"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//           {/* Search Results Dropdown */}
//           {searchTerm && (
//             <div className="absolute top-full z-50 w-full bg-white shadow-lg rounded-md mt-1 max-h-60 overflow-y-auto">
//               {searchResults.length > 0 ? (
//                 searchResults.map((product) => (
//                   <Link
//                     href={`/product/${product.id}`}
//                     key={product.id}
//                     className="block p-4 hover:bg-gray-100"
//                   >
//                     <h3 className="text-base font-semibold text-gray-800">
//                       {highlightMatch(product.title, searchTerm)}
//                       {/* {product.title} */}
//                     </h3>
//                   </Link>
//                 ))
//               ) : (
//                 <p className="p-4 text-gray-600">No products found</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Cart Icon */}
//         <Link href="#">
//           <button
//             aria-label="View Cart"
//             className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-500 hover:bg-gray-200"
//           >
//             <FiShoppingCart className="h-5 w-5 text-gray-700" />
//             <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
//               0
//             </span>
//           </button>
//         </Link>
//       </nav>

//       {/* Responsive Sidebar */}
//       <Sidebar />
//     </>
//   );
// };

// export default Navbar;
"use client";

import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";
import Search from "./search";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="mt-4 hidden h-10 items-center justify-between md:flex">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={140}
            height={25}
            className="cursor-pointer object-contain mix-blend-multiply"
          />
        </Link>

        <div className="flex items-center gap-6 text-sm font-bold lg:gap-12 lg:text-base">
          {["Female", "Male", "Kids", "All Products"].map((item) => {
            const link = `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === link;
            return (
              <Link
                href={link}
                key={item}
                className={`relative ${
                  isActive ? "text-theme-color" : "text-black"
                } before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:transform before:rounded-md ${
                  isActive ? "before:bg-theme-color" : "before:bg-black"
                } before:transition-all before:duration-500 hover:before:w-full`}
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

        <Search isSidebar={false} />

        <Link href="/cart">
          <button
            aria-label="View Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-500 hover:bg-gray-200"
          >
            <FiShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              0
            </span>
          </button>
        </Link>
      </nav>

      <Sidebar />
    </>
  );
}
