import React from "react";
import Card from "../Card/Card";
import "./CardGrid.css";

const products = [
  { id: 1, image: "../../assets/img/championes/forum-low-cL.jpg", name: "Championes Forum Low CL", price: 5990 },
  { id: 2, image: "../../assets/img/championes/gazelle-gris.jpg", name: "Championes 2", price: 60 },
  { id: 3, image: "../../assets/img/championes/gazelle-indoor.jpg", name: "Championes 3", price: 70 },
  { id: 4, image: "../../assets/img/championes/superstar.jpg", name: "Championes 4", price: 80 },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default CardGrid;
