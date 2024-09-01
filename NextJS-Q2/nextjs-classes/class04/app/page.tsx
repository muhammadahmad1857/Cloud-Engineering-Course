import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="text-center  flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-extrabold  text-center mt-6">
        Welcome to Class03
      </h1>
      <h2 className="text-xl font-bold ">
        In Class03 Sir
        <Link className="underline" href={"https://github.com/abuhurairah127"}>
          {" "}
          Abu Hurairah
        </Link>{" "}
        teaches us about Flex and Grid layout
      </h2>
      <h3 className="text-lg font-semibold ">
        That's why in today&apos;s class I maked two folders one for the{" "}
        <Link
          href={
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
          }
          className="underline"
        >
          FlexBox
        </Link>{" "}
        and other one for the{" "}
        <Link
          className="underline"
          href={
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout"
          }
        >
          Grid
        </Link>{" "}
        You can check those pages by clicking on the flex and grid
        buttons...Thank You.
      </h3>
      <div className="flex justify-center items-center gap-10 ">
        <Link href="/flex">
          {" "}
          <button className="px-3 py-2 bg-white rounded-md text-black transition-colors duration-700 hover:bg-slate-200 ">
            FlexBox Layout
          </button>
        </Link>
        <Link href="/grid">
          <button className="px-3 py-2 bg-white rounded-md text-black transition-colors duration-700 hover:bg-slate-200 ">
            Grid Layout
          </button>{" "}
        </Link>
      </div>
      <h3 className="text-lg font-semibold ">
        Here I am an adding an image for understanding what is Justify-content
      </h3>
      <Image
        // className="w-10 h-10"
        width={200}
        src="/justify-image.jpg"
        alt="Understanding Justify-Content"
        height={200}
      />
    </div>
  );
};

export default Home;
