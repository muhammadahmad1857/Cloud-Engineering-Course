import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiHome } from "react-icons/fi";

export default function notFound() {
  return (
    <section className="pt-10  relative">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12 text-center">
            <div>
              <Image
                src="/error.png"
                width={896}
                height={539}
                alt="Error Image"
                className="mx-auto"
              />
            </div>
            <h2 className="text-4xl font-semibold mt-12">
              <span>Oops! Page Not Found</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium mt-4 mb-12">
              The page you are looking for does not exist
            </p>
            <Link
              scroll={false}
              href="/"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-opacity-90 transition duration-300"
            >
              <span className="items-center gap-2 flex">
                {" "}
                <FiHome color="white" size={28} />
                Go Back Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
