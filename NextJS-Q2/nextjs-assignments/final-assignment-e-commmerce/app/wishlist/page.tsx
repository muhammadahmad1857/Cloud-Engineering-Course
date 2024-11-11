
import React from "react";
import SectionHeading from "../(components)/sectionHeading";
import CustomLayout from "../(components)/customLayout";
import WishListComponent from "../(components)/wishListComponent";

const Wishlist = () => {
  return (
    <div>
      <SectionHeading
        heading="See Your Favourite Products..."
        title="wishlist"
      />
      <CustomLayout>
        <WishListComponent/>
      </CustomLayout>

    </div>
  );
};

export default Wishlist;
