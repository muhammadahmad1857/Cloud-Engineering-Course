import React from "react";

const Flex = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-extrabold text-center mt-10">
        What Is FlexBox? For details, see README.md of this page
      </h1>
      {/* Flex Layout Details in README.md */}
      <p>Flex Layout Details in README.md</p>

      {/* Basic Flexbox Layout */}
      <div className="flex">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* Adding gap */}
      <p>
        Now I copy the same div and add gap property in it... It is a gutter
        class. For details of what is gutter class, see README.md
      </p>
      <div className="flex gap-10">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* Gap-x Example */}
      <p>
        We can add two types of gap on y-axis and x-axis but now we just see
        gap-x. After studying flex direction, we’ll check gap-y and gap-x
        together.
      </p>
      <div className="flex gap-x-10">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* Flex Direction Examples */}
      <p>
        Now we are going to study flex direction. There are 4 flex directions:
        column, row (default), column-reverse, row-reverse.
      </p>
      {/* flex-col */}
      <div className="flex flex-col gap-4">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* flex-row (default) */}
      <div className="flex flex-row gap-4">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* flex-col-reverse */}
      <div className="flex flex-col-reverse gap-4">
        <div className="text-center w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          <span>1</span>
        </div>
        <div className="text-center w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          <span>2</span>
        </div>
        <div className="text-center w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          <span>3</span>
        </div>
      </div>

      {/* flex-row-reverse */}
      <div className="flex flex-row-reverse gap-4">
        <div className="text-center w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          <span>1</span>
        </div>
        <div className="text-center w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          <span>2</span>
        </div>
        <div className="text-center w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          <span>3</span>
        </div>
      </div>

      {/* Flex Wrap Examples */}
      <p>
        There are 3 types of flex-wrap: wrap, no-wrap (default), wrap-reverse.
      </p>
      {/* flex-wrap */}
      <p>
        flex-wrap: This property will make the flex items wrap onto a new line
        if there's not enough space along the main-axis.
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="text-center w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          <span>1</span>
        </div>
        <div className="text-center w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          <span>2</span>
        </div>
        <div className="text-center w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          <span>3</span>
        </div>
      </div>

      {/* flex-nowrap */}
      <p>
        flex-nowrap: This property is the default behavior of flexbox; it
        doesn't wrap any elements even if the space is less, and items may
        overflow.
      </p>
      <div className="flex flex-nowrap gap-4">
        <div className="text-center w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          <span>1</span>
        </div>
        <div className="text-center w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          <span>2</span>
        </div>
        <div className="text-center w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          <span>3</span>
        </div>
      </div>

      {/* flex-wrap-reverse */}
      <p>
        flex-wrap-reverse: This property will make the flex items wrap onto a
        new line if there's not enough space along the main-axis, but it will
        wrap them in reverse order.
      </p>
      <div className="flex flex-wrap-reverse gap-4">
        <div className="text-center w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          <span>1</span>
        </div>
        <div className="text-center w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          <span>2</span>
        </div>
        <div className="text-center w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          <span>3</span>
        </div>
      </div>

      {/* Justify Content Examples */}
      <p>
        justify-content: This property aligns the items along the main-axis.
      </p>
      <div className="flex justify-between">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* Align Items Examples */}
      <p>align-items: This property aligns the items along the cross-axis.</p>
      <div className="flex items-center h-48">
        <div className="w-32 aspect-square bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full"></div>
        <div className="w-32 aspect-square bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full"></div>
      </div>

      {/* Flex Grow Example */}
      <p>
        flex-grow: This property allows a flex item to grow in proportion to the
        available space.
      </p>
      <div className="flex gap-4">
        <div className="w-32 flex-grow bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          1
        </div>
        <div className="w-32 bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          2
        </div>
        <div className="w-32 bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          3
        </div>
      </div>

      {/* Flex Basis Example */}
      <p>
        flex-basis: This property sets the initial main size of a flex item
        before any space distribution happens.
      </p>
      <div className="flex gap-4">
        <div className="flex-basis-1/3 bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          1/3
        </div>
        <div className="flex-basis-1/4 bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          1/4
        </div>
        <div className="flex-basis-1/2 bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          1/2
        </div>
      </div>

      {/* Flex Shrink Example */}
      <p>
        flex-shrink: This property allows a flex item to shrink if needed, to
        prevent overflow.
      </p>
      <div className="flex gap-4">
        <div className="flex-shrink bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          1
        </div>
        <div className="flex-shrink-0 bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          2
        </div>
        <div className="flex-shrink bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          3
        </div>
      </div>

      {/* Order Example */}
      <p>
        order: This property allows you to control the order of flex items
        regardless of their source order.
      </p>
      <div className="flex gap-4 text-center ">
        <div className="order-2 w-32 aspect-square content-center text-black bg-white cursor-pointer hover:bg-slate-200 transition-colors duration-300 rounded-full">
          1
        </div>
        <div className="order-3 w-32 aspect-square content-center bg-slate-400 cursor-pointer hover:bg-slate-600 transition-colors duration-300 rounded-full">
          2
        </div>
        <div className="order-1 w-32 aspect-square content-center bg-gray-500 cursor-pointer hover:bg-slate-700 transition-colors duration-300 rounded-full">
          3
        </div>
      </div>

      {/* Nested Flex Containers */}
      <p>
        Nested Flex Containers: You can nest flex containers inside each other.
        The nested containers will inherit the flex properties of the parent.
      </p>
      <div className="flex gap-4 p-4 border border-gray-300">
        <div className="flex-1 bg-white p-4 rounded-lg">
          <div className="flex gap-2">
            <div className="w-16 h-16 bg-slate-400 rounded-full"></div>
            <div className="w-16 h-16 bg-slate-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 bg-slate-200 p-4 rounded-lg">
          <div className="flex gap-2 flex-col">
            <div className="w-16 h-16 bg-slate-600 rounded-full"></div>
            <div className="w-16 h-16 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
