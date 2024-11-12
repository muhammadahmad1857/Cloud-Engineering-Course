import React from "react";
import SectionHeading from "../(components)/sectionHeading";
import CartUI from "../(components)/cartUI";
import CustomLayout from "../(components)/customLayout";
const Cart = () => {
  return (
    <div>
      <SectionHeading title="cart" heading="Your Shopping Cart" />
      <CustomLayout>      <CartUI />
</CustomLayout>
    </div>
  );
};

export default Cart;
