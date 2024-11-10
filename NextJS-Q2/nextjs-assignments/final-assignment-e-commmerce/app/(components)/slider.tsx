import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
interface Slide {
  src: string;
  title: string;
}

interface SlidesDataProps {
  slidesData: Slide[];
}

export default function SimpleSlider({ slidesData }: SlidesDataProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="relative">
            <Image
              src={slide.src}
              alt={slide.title}
              width={100}
              height={500}
              className="w-screen h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <Link href={`#${slide.title}`}>
                <a className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
