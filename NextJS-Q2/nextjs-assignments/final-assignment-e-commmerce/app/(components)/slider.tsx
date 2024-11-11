"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import Image from "next/image";

interface Slide {
  src: string;
  title: string;
  link?: string | undefined;
}

interface SlidesDataProps {
  slidesData: Slide[];
}

export default function SimpleSlider({ slidesData }: SlidesDataProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // Duration for each slide in ms

  useEffect(() => {
    if (slidesData.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, slideInterval);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [currentIndex, slidesData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-10 ">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black text-center bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-semibold capitalize">{slide.title}</h2>
            {slide.link && (
              <Link href={slide.link}>
                <button className="mt-4 bg-black hover:bg-gray-700 transition-colors duration-500 text-white font-bold py-2 px-4 rounded">
                  Explore
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
      <div className="sm:block hidden">
        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 transition-colors duration-500  bg-white bg-opacity-30 text-black p-2 rounded-full hover:bg-opacity-50"
        >
          <FaArrowLeft size={23} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform transition-colors duration-500 -translate-y-1/2 bg-white bg-opacity-30 text-black p-2 rounded-full hover:bg-opacity-50"
        >
          {" "}
          <FaArrowRight size={23} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
