import React from "react";

const Home = () => {
  return (
    <div className="p-8">
      {/* Text Color */}
      <p className="text-red-500">This is a red text paragraph.</p>
      <p className="text-blue-500">This is a blue text paragraph.</p>
      <p className="text-green-500">This is a green text paragraph.</p>

      {/* Text Alignment */}
      <p className="text-center">This paragraph is center-aligned.</p>
      <p className="text-left">This paragraph is left-aligned.</p>
      <p className="text-right">This paragraph is right-aligned.</p>

      {/* Font Size */}
      <p className="text-xs">This is extra small text.</p>
      <p className="text-sm">This is small text.</p>
      <p className="text-base">This is base text.</p>
      <p className="text-lg">This is large text.</p>
      <p className="text-xl">This is extra large text.</p>

      {/* Font Weight */}
      <p className="font-light">This is light text.</p>
      <p className="font-normal">This is normal weight text.</p>
      <p className="font-semibold">This is semibold text.</p>
      <p className="font-bold">This is bold text.</p>

      {/* Text Transform */}
      <p className="uppercase">THIS text IS uppercase.</p>
      <p className="lowercase">THIS text is LOWERCASE.</p>
      <p className="capitalize">this text is Capitalized.</p>

      {/* Text Decoration */}
      <p className="underline">This text has an underline.</p>
      <p className="line-through">This text has a line-through.</p>
      <p className="no-underline">This text has no underline.</p>

      {/* Text Overflow */}
      <p className="truncate">
        This text will be truncated if it&apos;s too long to fit in the
        container.
      </p>
      <p className="overflow-ellipsis">
        This text will show an ellipsis when overflowing.
      </p>
      <p className="overflow-hidden">
        This text will be hidden if it&apos;s too long.
      </p>

      {/* Flex and Grid Layout */}
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg">Flex item 1</p>
        <p className="text-lg">Flex item 2</p>
        <p className="text-lg">Flex item 3</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-200 p-4">Grid item 1</div>
        <div className="bg-gray-300 p-4">Grid item 2</div>
        <div className="bg-gray-400 p-4">Grid item 3</div>
        <div className="bg-gray-500 p-4">Grid item 4</div>
      </div>
    </div>
  );
};

export default Home;
