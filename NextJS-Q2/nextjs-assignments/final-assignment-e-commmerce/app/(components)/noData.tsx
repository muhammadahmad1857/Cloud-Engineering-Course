import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function NoData({
  btnText = "",
}: {
  btnText?: string | undefined;
}) {
  return (
    <section className="space-top pt-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12">
            <div className="text-center">
              <div className="mb-8">
                <Image src="/error.png" width={896} height={539} alt="img" />
              </div>
              <h2 className="sm:text-[60px] text-[50px] font-semibold mt-12">
                <span className="text-theme-color">
                  Oops! We&apos;re working on it...
                </span>
              </h2>
              <p className="text-paragraph-color text-[18px] font-normal leading-[24px] my-12">
                There&apos;s nothing to show you right now, but don&apos;t
                worry, we&apos;re working hard to bring you the best content.
              </p>
              <button className="mt-8 rounded-lg capitalize bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-gray-800">
                <FiShoppingCart className="mr-2 inline h-6 w-6" />
                No products Found {btnText}...Please Try Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
