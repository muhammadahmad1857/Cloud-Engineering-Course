import React from "react";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import Link from "next/link";

export default function ErrorPage({
  err = "Failed to fetch",
}: {
  err?: string | undefined;
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
                  Oops! Something Went Wrong...
                </span>
              </h2>
              <p className="text-paragraph-color text-[18px] font-normal leading-[24px] my-12">
                {err}
              </p>
              <Link
                href={"/"}
                className="mt-8 rounded-lg capitalize bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-gray-800"
              >
                <FiHome className="mr-2 inline h-6 w-6" />
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
