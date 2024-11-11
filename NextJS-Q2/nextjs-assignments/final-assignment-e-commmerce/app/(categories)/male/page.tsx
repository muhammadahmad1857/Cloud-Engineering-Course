import React from "react";
import CustomLayout from "../../(components)/customLayout";
import CategoryProductUI from "../../(components)/categoryProductUI";
import SimpleSlider from "../../(components)/slider";

const Male = () => {
  return (
    <div>
      <SimpleSlider
        slidesData={[
          {
            src: "/slide1.png",
            title: "Welcome To Dine Market",
          },
          {
            src: "/slide3.png",
            title: "Discover Our Male Category",
            link: "#male",
          },
        ]}
      />
      <CustomLayout>
        <CategoryProductUI category="men's clothing" id="male" />
      </CustomLayout>
    </div>
  );
};

export default Male;
