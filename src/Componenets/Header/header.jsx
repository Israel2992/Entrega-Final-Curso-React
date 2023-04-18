import React from "react";
import "./header.css";
import carrito from "./logo/carrito.png";

const Header = (props) => {
  const { title, totalCarrito } = props;

  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <div className="carrito">
        <img src={carrito} className="logo-carrito" alt="" />
        <p>{totalCarrito}</p>
      </div>
    </div>
  );
};

export default Header;
