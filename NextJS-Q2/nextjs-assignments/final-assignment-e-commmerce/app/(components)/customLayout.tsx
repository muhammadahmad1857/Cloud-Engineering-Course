"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>{children} </Provider>
    </div>
  );
};

export default CustomLayout;
