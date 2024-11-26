import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import { getProducts } from "../../data/products";

const ItemDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const sizes = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "5.5"];

  useEffect(() => {
    getProducts()
      .then((products) => {
        setRecommendedProducts(products); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="item-detail">
      <div className="item-detail-left">
        <img src={product.image} alt={product.name} className="main-image" />
      </div>

      <div className="item-detail-right">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-code">art: {product.id}</p>
        <p className="product-price">UYU {product.price}</p>

        <p className="product-gender">
          <strong>Género:</strong> {product.category === "women" ? "Mujer" : "Hombre"}
        </p>

        <div className="product-sizes">
          <p className="size-label">Talle:</p>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? "selected" : ""}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="buy-button">COMPRAR</button>

        <div className="shipping-info">
          <p>Métodos y costos de envío</p>
        </div>

        <div className="product-characteristics">
          <p><strong>CARACTERÍSTICAS</strong></p>
          <p>Color: Blanco</p>
          <p>Género: Mujer</p>
          <p>Edad: Adulto</p>
          <p>Tipo: Bajas</p>
        </div>

        <hr className="section-divider" />
        <div className="product-description">
          <h2 className="description-title">Descripción</h2>
          <hr className="description-divider" />
          <p className="description-text">
            Una zapatilla que nunca ha pasado de moda. La adidas Grand Court lleva imponiendo su estilo desde los años 70.
            Una vez decidas apostar por este clásico atemporal, no querrás ponerte otra cosa.
            Las 3 bandas aportan un toque deportivo a cualquier look.
          </p>
        </div>

        <div className="product-recommendations">
          <h2 className="recommendations-title">Productos que te pueden interesar</h2>

          {loading ? (
            <p>Cargando productos recomendados...</p>
          ) : (
            <div className="recommendations-grid">
              {recommendedProducts.map((item) => (
                <div key={item.id} className="recommendation-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="recommendation-image"
                  />
                  <p className="recommendation-name">{item.name}</p>
                  <p className="recommendation-price">UYU {item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
