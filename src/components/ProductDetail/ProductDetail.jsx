import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import "./ProductDetail.css"; // Importa los estilos correctos

const ProductDetail = () => {
  const { itemId } = useParams(); // Captura el ID del producto desde la URL
  const [product, setProduct] = useState(null); // Estado del producto
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    setLoading(true);
    getProductById(itemId) // Busca el producto por ID
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Error al obtener el producto");
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="item-detail-container">
      <div className="product-detail-content">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>Precio: UYU {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
