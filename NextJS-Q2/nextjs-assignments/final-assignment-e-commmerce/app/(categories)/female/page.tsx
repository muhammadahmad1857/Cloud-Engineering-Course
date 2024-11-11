import React from "react";
import CategoryProductUI from "../../(components)/categoryProductUI";
import CustomLayout from "../../(components)/customLayout";
import SimpleSlider from "../../(components)/slider";

const Female = () => {
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
            title: "Discover Our Female Category",
            link: "#female",
          },
        ]}
      />
      <CustomLayout>
        {" "}
        <CategoryProductUI category="women's clothing" id="female" />
      </CustomLayout>
    </div>
  );
};

export default Female;
