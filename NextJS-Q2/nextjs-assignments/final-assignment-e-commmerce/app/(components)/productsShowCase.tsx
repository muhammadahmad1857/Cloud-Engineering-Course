"use client";
import React, { useEffect } from "react";
import SectionHeading from "./sectionHeading";
import Image from "next/image";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import Link from "next/link";
import Loader from "./mainLoader";
import NoData from "./noData";
import ErrorPage from "./custom-error";
import useToast from "quick-toastify";

const ProductsShowCase = () => {
  const { products, status, error } = useAppSelector(
    (state: RootState) => state.products
  );

  const dispatch = useAppDispatch();
  const { toastComponent } = useToast("top-right");
  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Error handling
  if (error) {
    return <ErrorPage err={error} />;
  }

  return (
    <>
      <SectionHeading heading="Check What We Have" title="Products" />
      {status === "loading" ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 tab:grid-cols-2  xl:grid-cols-3 place-items-center  xl:place-items-stretch gap-5 ">
          {products.slice(0, 3).map((product) => (
            <Link
              href={`/product/${product.id}`}
              className="w-full flex flex-col h-full max-w-[350px] mob:w-96 p-3 transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-xl"
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="max-h-96 w-full cursor-pointer mb-2 object-cover rounded-xl"
              />
              <h3 className="text-base font-semibold">{product.title}</h3>
              <p className="text-lg font-semibold">${product.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <NoData />
      )}
      {toastComponent}
    </>
  );
};

export default ProductsShowCase;
