import React, { useState, useEffect } from "react";
import "./WomenCategory.css";
import Card from "../Card/Card";
import { getProductsByCategory } from "../../data/products";

const WomenCategory = () => {
  const [womenProducts, setWomenProducts] = useState([]); // Estado de los productos
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Controla la apertura de Categorías
  const [isBrandOpen, setIsBrandOpen] = useState(false); // Controla la apertura de Marcas
  const [isPriceOpen, setIsPriceOpen] = useState(false); // Controla la apertura de Precios

  useEffect(() => {
    // Filtra los productos por la categoría "women"
    getProductsByCategory("women")
      .then((products) => setWomenProducts(products))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  const womenBanner = "/Entrega-Fernandez/assets/img/banner/banner_mujer.jpg";

  return (
    <div className="women-category-container">
      {/* Banner */}
      <div className="women-banner">
        <img src={womenBanner} alt="Mujeres Banner" className="women-banner-image" />
      </div>

      <div className="main-content">
        {/* Opciones desplegables */}
        <aside className="filter-options">
          <h2 className="filter-title">Para Mujer</h2>
          <div className="filter-group">
            <button
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              className="filter-button"
            >
              Categorías
            </button>
            {isCategoryOpen && (
              <ul className="dropdown-menu">
                <li>Calzado</li>
                <li>Ropa</li>
                <li>Accesorios</li>
              </ul>
            )}
          </div>

          <div className="filter-group">
            <button
              onClick={() => setIsBrandOpen((prev) => !prev)}
              className="filter-button"
            >
              Marcas
            </button>
            {isBrandOpen && (
              <ul className="dropdown-menu">
                <li>Adidas</li>
                <li>Nike</li>
                <li>Puma</li>
              </ul>
            )}
          </div>

          <div className="filter-group">
            <button
              onClick={() => setIsPriceOpen((prev) => !prev)}
              className="filter-button"
            >
              Precios
            </button>
            {isPriceOpen && (
              <ul className="dropdown-menu">
                <li>Menos de $5000</li>
                <li>Entre $5000 y $10000</li>
                <li>Más de $10000</li>
              </ul>
            )}
          </div>
        </aside>

        {/* Sección de productos */}
        <div className="products-section">
          <h1 className="category-title">Mujeres</h1>
          {womenProducts.length > 0 ? (
            <div className="products-grid">
              {womenProducts.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WomenCategory;
