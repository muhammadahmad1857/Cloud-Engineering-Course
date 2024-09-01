// Class 05: Tailwind CSS Customization and Advanced Concepts
// Instructor: Sir Abu Hurairah
// Today’s Lesson: How to Customize Tailwind CSS, Media Queries, Transitions, Scale, Transform, Transform Origin, and Creating a Cool Button Using Positions

// Introduction
// In today's class, we will explore how to customize Tailwind CSS and dive into its three layers: base, components, and utilities.
// We'll also cover media queries, transitions, scale, transform, and transform origin.
// Finally, we’ll create a cool button that showcases all of these concepts using positioning.
// For conceptual details, see the README.md file.

// Basic Setup (Ensure Tailwind CSS is installed and configured)
// Refer to the README.md for Tailwind CSS installation and setup instructions.

import Link from "next/link";
import React from "react";

export default function Class05() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      {/* Here I am going to update the base layer because I want the same styling for all the h1 for the details of layers see readme.md */}
      <h1>Class 05 code</h1>
      <p>
        In Class05 Sir
        <Link href={"https://github.com/abuhurairah127"} className="underline">
          {" "}
          Abu Hurairah
        </Link>{" "}
        teaches us about the layers of tailwind css,media queries, how to
        customize tailwind css layers, transitions, scale, and make cool card
        with transition
      </p>
      {/* Media Query: Media query are the break points to make the screen responsive */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-6 rounded-lg col-span-1 row-span-1">
            <h2 className="text-xl font-bold">Item 1</h2>
            <p>This item spans 1 column and 1 row.</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg col-span-1 row-span-2 lg:col-span-2 lg:row-span-1">
            <h2 className="text-xl font-bold">Item 2</h2>
            <p>
              This item spans 1 column and 2 rows on small screens, and 2
              columns and 1 row on large screens.
            </p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg col-span-1 row-span-1">
            <h2 className="text-xl font-bold">Item 3</h2>
            <p>This item spans 1 column and 1 row.</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg col-span-1 row-span-1 lg:col-span-2 lg:row-span-2">
            <h2 className="text-xl font-bold">Item 4</h2>
            <p>
              This item spans 1 column and 1 row on small screens, and 2 columns
              and 2 rows on large screens.
            </p>
          </div>
        </div>
      </div>
      {/* Transition: Transitions help smoothly animate changes between elements */}
      <button className="cursor-pointer rounded-md hover:rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-10 hover:bg-blue-500 p-4 bg-gray-300 text-white">
        Hover over me
      </button>
      {/* Scale: Scale allows elements to grow or shrink */}
      <div>
        <div className="flex gap-20">
          <div className="h-20 w-20 cursor-pointer bg-red-500  hover:bg-red-600 scale-150 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-5"></div>
          <div className="h-20 w-20 cursor-pointer bg-blue-500 hover:bg-blue-600 scale-150 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-5"></div>
          <div className="h-20 w-20 cursor-pointer bg-green-500 hover:bg-green-600 scale-150 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-5"></div>
        </div>
      </div>
      {/* Group Hover: Group hover is used tomake when parent is hovered the child get the hover effect */}
      <div className="group p-8 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300">
        <div className="transition-all  duration-300 group-hover:scale-110 group-hover:bg-blue-200 p-4 rounded-lg bg-white shadow-md">
          <h2 className="text-xl font-bold mb-2 text-gray-700">Card Title</h2>
          <p className="text-gray-700">
            This is some description text inside the card. Hover over the parent
            card to see the effect on this card.
          </p>
        </div>
      </div>
      {/* We can make a custom class using component layer */}
      <div className="bg-blue-300 p-4 rounded-lg cursor-pointer">
        <div className="custom-card">
          <h2 className="text-xl font-bold mb-2 text-gray-700">Card Title</h2>
          <p className="text-gray-700">
            This is some description text inside the card.
          </p>
        </div>
      </div>
      {/* We can also add our own theme color or some styles some specific hieght which is nto exactly given by tailwind css how to do that see README.md */}
      <p className="text-2xl text-primary-light bg-primary-dark p-2">
        This text is written by a custom color not given by tailwind and it's
        background color also
      </p>
     

    </div>
  );
}

// README.md Reference
// For more details on the concepts introduced in this code, please see the README.md file.
