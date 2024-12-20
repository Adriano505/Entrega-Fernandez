import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams(); // Captura el ID del producto desde la URL
  const [product, setProduct] = useState(null); // Estado del producto
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    setLoading(true); // Comienza cargando
    setError(null); // Resetea cualquier error previo

    getProductById(itemId)
      .then((product) => {
        if (product) {
          setProduct(product); // Establece el producto si se encuentra
        } else {
          setError("Producto no encontrado."); // Error si no existe el producto
        }
        setLoading(false); // Detiene el estado de carga
      })
      .catch(() => {
        setError("Error al cargar el producto."); // Manejo de errores en la solicitud
        setLoading(false);
      });
  }, [itemId]);

  // Renderización condicional basada en el estado
  if (loading) return <p className="loading-message">Cargando producto...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} /> {/* Renderiza los detalles del producto */}
    </div>
  );
};

export default ItemDetailContainer;
