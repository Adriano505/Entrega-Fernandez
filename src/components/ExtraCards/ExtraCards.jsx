import React from "react";
import "./ExtraCards.css";
import Card from "../Card/Card"; 

import iconosDelMomento from "../../assets/img/banner/iconos.jpg";
import adizerp from "../../assets/img/banner/adizero.jpg";
import gazelle from "../../assets/img/banner/gazelle.jpg";
import adicolor from "../../assets/img/banner/adicolor.jpg";

const ExtraCards = () => {
  return (
    <div className="extra-cards-container">
      <div className="extra-card">
        <img
          src={iconosDelMomento}
          alt="ÍCONOS DEL MOMENTO"
          className="extra-card-image"
        />
        <div className="extra-card-content">
          <p className="extra-card-title">ÍCONOS DEL MOMENTO</p>
          <p className="extra-card-subtitle">Para cualquier look.</p>
        </div>
      </div>
      <div className="extra-card">
        <img
          src={adizerp}
          alt="ADIZERP"
          className="extra-card-image"
        />
        <div className="extra-card-content">
          <p className="extra-card-title">ADIZERP</p>
          <p className="extra-card-subtitle">Para destacar siempre.</p>
        </div>
      </div>
      <div className="extra-card">
        <img
          src={gazelle}
          alt="GAZELLE"
          className="extra-card-image"
        />
        <div className="extra-card-content">
          <p className="extra-card-title">GAZELLE</p>
          <p className="extra-card-subtitle">Para los más exigentes.</p>
        </div>
      </div>
      <div className="extra-card">
        <img
          src={adicolor}
          alt="ADICOLOR"
          className="extra-card-image"
        />
        <div className="extra-card-content">
          <p className="extra-card-title">ADICOLOR</p>
          <p className="extra-card-subtitle">Para cualquier ocasión.</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraCards;
