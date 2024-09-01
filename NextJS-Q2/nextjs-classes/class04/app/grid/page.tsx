import React from "react";

const Grid = () => {
  return (
    <div className="bg-white text-black p-10">
      <h1 className="text-2xl font-extrabold text-center mb-10">
        What Is CSS Grid? For details, see README.md of this page.
      </h1>

      {/* Basic Grid Layout */}
      <p className="text-center mb-5">Basic Grid Layout</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
      </div>

      {/* Nested Grid */}
      <p className="text-center mt-10 mb-5">Nested Grid Layout</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-gray-400 flex items-center justify-center">
            2.1
          </div>
          <div className="aspect-square bg-gray-500 flex items-center justify-center">
            2.2
          </div>
        </div>
      </div>

      {/* Nested Flex in Grid */}
      <p className="text-center mt-10 mb-5">Nested Flex in Grid Layout</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="flex flex-col gap-2">
          <div className="aspect-square bg-gray-400 flex items-center justify-center">
            Flex 2.1
          </div>
          <div className="aspect-square bg-gray-500 flex items-center justify-center">
            Flex 2.2
          </div>
        </div>
        <div className="aspect-square bg-gray-600 flex items-center justify-center">
          3
        </div>
      </div>

      {/* Grid Properties Demonstration */}
      <h2 className="text-xl font-bold text-center mt-10 mb-5">Grid Properties</h2>

      {/* grid-template-columns */}
      <p className="text-center mb-2">Grid Template Columns</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
        <div className="aspect-square bg-gray-600 flex items-center justify-center">
          4
        </div>
      </div>

      {/* grid-template-rows */}
      <p className="text-center mt-10 mb-2">Grid Template Rows</p>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
        <div className="aspect-square bg-gray-600 flex items-center justify-center">
          4
        </div>
      </div>

      {/* grid-auto-columns */}
      <p className="text-center mt-10 mb-2">Grid Auto Columns</p>
      <div className="grid grid-cols-[auto auto auto] gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
      </div>

      {/* grid-auto-rows */}
      <p className="text-center mt-10 mb-2">Grid Auto Rows</p>
      <div className="grid grid-rows-[auto auto auto] gap-4">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
      </div>

      {/* grid-gap */}
      <p className="text-center mt-10 mb-2">Grid Gap</p>
      <div className="grid grid-cols-3 gap-8">
        <div className="aspect-square bg-gray-300 flex items-center justify-center">
          1
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
      </div>

      {/* grid-column */}
      <p className="text-center mt-10 mb-2">Grid Column Span</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="aspect-square bg-gray-300 col-span-2 flex items-center justify-center">
          1 (Col Span 2)
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
      </div>

      {/* grid-row */}
      <p className="text-center mt-10 mb-2">Grid Row Span</p>
      <div className="grid grid-cols-4 gap-4">
        <div className="aspect-square bg-gray-300 row-span-2 flex items-center justify-center">
          1 (Row Span 2)
        </div>
        <div className="aspect-square bg-gray-400 flex items-center justify-center">
          2
        </div>
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          3
        </div>
        <div className="aspect-square bg-gray-600 flex items-center justify-center">
          4
        </div>
      </div>

      {/* place-items */}
      <p className="text-center mt-10 mb-2">Place Items Center</p>
      <div className="grid grid-cols-2 place-items-center gap-4">
        <div className="aspect-square bg-gray-300">
          1
        </div>
        <div className="aspect-square bg-gray-400">
          2
        </div>
      </div>

      {/* place-content */}
      <p className="text-center mt-10 mb-2">Place Content Center</p>
      <div className="grid grid-cols-2 place-content-center h-40 bg-gray-200 gap-4">
        <div className="aspect-square bg-gray-300">
          1
        </div>
        <div className="aspect-square bg-gray-400">
          2
        </div>
      </div>

      {/* place-self */}
      <p className="text-center mt-10 mb-2">Place Self Center</p>
      <div className="grid grid-cols-2 gap-4 h-40">
        <div className="aspect-square bg-gray-300 place-self-center">
          1
        </div>
        <div className="aspect-square bg-gray-400">
          2
        </div>
      </div>

    </div>
  );
};

export default Grid;
