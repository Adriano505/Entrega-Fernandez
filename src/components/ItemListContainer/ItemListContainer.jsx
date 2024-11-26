import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { getProducts, getProductsByCategory } from "../../data/products";
import { useCart } from "../../context/CartContext"; 
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); 
  const navigate = useNavigate(); 
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();

    fetchData
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los productos.");
        setLoading(false);
      });
  }, [categoryId]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (loading) {
    return <p className="loading-message">Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div className="card-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="card"
              onClick={() => navigate(`/product/${product.id}`)} 
            >
              <img src={product.image} alt={product.name} className="card-image" />
              <div className="card-content">
                <h2 className="card-name">{product.name}</h2>
                <p className="card-price">UYU {product.price}</p>
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    addToCart(product);
                  }}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
