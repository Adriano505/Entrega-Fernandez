import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartDropdown.css";

const CartDropdown = () => {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-dropdown">
      <h3>Carrito</h3>
      {cart.length > 0 ? (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">${item.price}</span>
                  <span className="cart-item-quantity">Cant: {item.quantity}</span>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-divider"></div>

          <div className="cart-total">
            <span>Total: ${totalAmount.toFixed(2)}</span>
          </div>

          <button className="checkout-button">Finalizar Compra</button>
        </>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default CartDropdown;
