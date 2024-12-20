import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); // Obtiene el ID de la categoría desde la URL
  const navigate = useNavigate(); // Para redirigir al usuario
  const { addToCart } = useCart(); // Contexto del carrito
  const [products, setProducts] = useState([]); // Estado de productos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de errores

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = categoryId
      ? getProductsByCategory(categoryId) // Muestra productos por categoría
      : getProducts(); // Página principal muestra todos los productos

    fetchData
      .then((data) => {
        // Si no hay categoría, mostramos solo 4 productos en la página principal
        const filteredProducts = categoryId ? data : data.slice(0, 4);
        setProducts(filteredProducts);
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
              onClick={() => navigate(`/product/${product.id}`)} // Redirige al detalle del producto
            >
              <img src={product.image} alt={product.name} className="card-image" />
              <div className="card-content">
                <h2 className="card-name">{product.name}</h2>
                <p className="card-price">UYU {product.price}</p>
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que se active la navegación al detalle
                    addToCart(product); // Agrega al carrito
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
