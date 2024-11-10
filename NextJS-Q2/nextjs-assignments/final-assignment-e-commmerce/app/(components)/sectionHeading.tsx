import React from "react";

const SectionHeading = ({
  title,
  heading,
}: {
  title: string;
  heading: string;
}) => {
  return (
    <>
      {/* Promotion section */}
      <p className="mt-20 text-center text-xs text-[#0062F5] capitalize">
        {title}
      </p>
      <h2 className="text text-center font-[sora] text-3xl font-bold capitalize">
        {heading}
      </h2>
    </>
  );
};

export default SectionHeading;
