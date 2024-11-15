import React from "react";
import CategoryProductUI from "../../(components)/categoryProductUI";
import CustomLayout from "../../(components)/customLayout";
import SimpleSlider from "../../(components)/slider";

const Products = () => {
  return (
    <div>
      <SimpleSlider
        slidesData={[
          {
            src: "/slide1.png",
            title: "Welcome To Dine Market",
            link: "#all",
          },
          {
            src: "/slide3.png",
            title: "Discover Our Female Category",
            link: "/female",
          },
          {
            src: "/slide2.png",
            title: "Discover Our Male Category",
            link: "/male",
          },
          {
            src: "/slide4.png",
            title: "Discover Our Jewelery Category",
            link: "/jewelery",
          },
        ]}
      />
      <CustomLayout>
        {" "}
        <CategoryProductUI id="all" />
      </CustomLayout>
    </div>
  );
};

export default Products;
