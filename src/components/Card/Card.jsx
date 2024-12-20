import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import { useCart } from "../../context/CartContext";
import "./Card.css";

const Card = ({ id, image, name, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Detiene la propagación para que no redirija al hacer clic en el botón
    addToCart({ id, name, price, image });
  };

  return (
    <Link to={`/product/${id}`} className="card-link"> {/* Enlace hacia los detalles del producto */}
      <div className="card">
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
          <h3 className="card-name">{name}</h3>
          <p className="card-price">${price}</p>
          <button
            className="card-button"
            onClick={handleAddToCart}
          >
            Comprar
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
