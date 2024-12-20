import React, { useState, useEffect } from "react";
import "./KidsCategory.css";
import Card from "../Card/Card";
import { getProductsByCategory } from "../../data/products";

const KidsCategory = () => {
  const [kidsProducts, setKidsProducts] = useState([]); // Estado de los productos
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  useEffect(() => {
    // Filtra los productos por la categoría "kids"
    getProductsByCategory("kids")
      .then((products) => setKidsProducts(products))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  const kidsBanner = "/Entrega-Fernandez/assets/img/banner/banner_niños.jpg";

  return (
    <div className="kids-category-container">
      {/* Banner */}
      <div className="kids-banner">
        <img src={kidsBanner} alt="Niños Banner" className="kids-banner-image" />
      </div>

      <div className="main-content">
        {/* Opciones desplegables */}
        <aside className="filter-options">
          <h2 className="filter-title">Para Niños</h2>
          <div className="filter-group">
            <button onClick={() => setIsCategoryOpen((prev) => !prev)} className="filter-button">
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
            <button onClick={() => setIsBrandOpen((prev) => !prev)} className="filter-button">
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
            <button onClick={() => setIsPriceOpen((prev) => !prev)} className="filter-button">
              Precios
            </button>
            {isPriceOpen && (
              <ul className="dropdown-menu">
                <li>Menos de $3000</li>
                <li>Entre $3000 y $5000</li>
                <li>Más de $5000</li>
              </ul>
            )}
          </div>
        </aside>

        {/* Sección de productos */}
        <div className="products-section">
          <h1 className="category-title">Niños</h1>
          {kidsProducts.length > 0 ? (
            <div className="products-grid">
              {kidsProducts.map((product) => (
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

export default KidsCategory;
