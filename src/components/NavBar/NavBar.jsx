import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./NavBar.css";

const NavBar = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Adidas</Link>
      <ul className="navbar-links">
        <li><Link to="/category/men">Hombres</Link></li>
        <li><Link to="/category/women">Mujeres</Link></li>
        <li><Link to="/category/kids">Niños</Link></li>
      </ul>
      <div className="cart-container" onClick={toggleCart}>
        <CartWidget />
        {showCart && <CartDropdown />}
      </div>
    </nav>
  );
};

export default NavBar;
