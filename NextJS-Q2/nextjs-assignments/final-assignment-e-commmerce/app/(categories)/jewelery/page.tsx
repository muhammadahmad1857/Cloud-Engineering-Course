import React from "react";
import CustomLayout from "../../(components)/customLayout";
import CategoryProductUI from "../../(components)/categoryProductUI";
import SimpleSlider from "../../(components)/slider";

const Jewellery = () => {
  return (
    <div>
      <SimpleSlider
        slidesData={[
          {
            src: "/slide1.png",
            title: "Welcome To Dine Market",
          },
          {
            src: "/slide4.png",
            title: "Discover Our Jewellery Category",
            link: "#jewelery",
          },
        ]}
      />
      <CustomLayout>
        <CategoryProductUI category="jewelery" id="jewelery" />
      </CustomLayout>
    </div>
  );
};

export default Jewellery;
