import React from "react";
// import SimpleSlider from "../(components)/slider";
import CategoryProductUI from "../(components)/categoryProductUI";
import CustomLayout from "../(components)/customLayout";

const Female = () => {
  return <div>
    {/* <SimpleSlider slidesData={[{src:""}]}/> */}
    <CustomLayout>   <CategoryProductUI category="women's clothing"/>
    </CustomLayout>
  </div>;
};

export default Female;
