import React from "react";
import "./Banner.css";

const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img
        src={image}
        alt="Banner"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
