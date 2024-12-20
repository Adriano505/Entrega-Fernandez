import React, { useState, useEffect } from "react";
import "./MenCategory.css";
import Card from "../Card/Card";
import { getProductsByCategory } from "../../data/products";

const MenCategory = () => {
  const [menProducts, setMenProducts] = useState([]); // Estado de los productos
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  useEffect(() => {
    // Filtra los productos por la categoría "men"
    getProductsByCategory("men")
      .then((products) => setMenProducts(products))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  const menBanner = "/Entrega-Fernandez/assets/img/banner/banner_hombre.jpg";

  return (
    <div className="men-category-container">
      {/* Banner */}
      <div className="men-banner">
        <img src={menBanner} alt="Hombres Banner" className="men-banner-image" />
      </div>

      <div className="main-content">
        {/* Opciones desplegables */}
        <aside className="filter-options">
          <h2 className="filter-title">Para Hombre</h2>
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
                <li>Menos de $5000</li>
                <li>Entre $5000 y $10000</li>
                <li>Más de $10000</li>
              </ul>
            )}
          </div>
        </aside>

        {/* Sección de productos */}
        <div className="products-section">
          <h1 className="category-title">Hombres</h1>
          {menProducts.length > 0 ? (
            <div className="products-grid">
              {menProducts.map((product) => (
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

export default MenCategory;
