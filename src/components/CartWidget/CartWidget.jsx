import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useCart();

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="cart-count">{getTotalItems()}</span>
    </div>
  );
};

export default CartWidget;
