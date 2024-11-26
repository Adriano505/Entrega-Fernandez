import React from "react";
import "./BottomBanner.css";

const BottomBanner = () => {
  return (
    <div className="bottom-banner">
      <img
        src="../assets/img/banner/banner.jpg" /* Ruta a la imagen del segundo banner */
        alt="Banner Secundario"
        className="bottom-banner-image"
      />
    </div>
  );
};

export default BottomBanner;
