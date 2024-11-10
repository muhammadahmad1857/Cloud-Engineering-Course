import React from "react";

const Loader = () => {
  return <div className="hourglassBackground">
    <div className="hourglassContainer">
      <div className="hourglassCurves"></div>
      <div className="hourglassCapTop"></div>
      <div className="hourglassGlassTop"></div>
      <div className="hourglassSand"></div>
      <div className="hourglassSandStream"></div>
      <div className="hourglassCapBottom"></div>
      <div className="hourglassGlass"></div>
    </div>
  </div>;
};

export default Loader;
