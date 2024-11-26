import React from "react";
import { useCart } from "../../context/CartContext";
import "./Card.css";

const Card = ({ id, image, name, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">${price}</p>
        <button className="card-button" onClick={handleAddToCart}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
