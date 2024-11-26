import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail"; 
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId)
      .then((product) => setProduct(product))
      .catch(() => setProduct(null)); 
  }, [itemId]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
