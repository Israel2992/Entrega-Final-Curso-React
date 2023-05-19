import React from "react";
import "../../CSS/header.css";
import carrito from "./logo/carrito.png";
import { useContext } from "react";
import GeneralContext from "../../Context/GeneralContext";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const Header = (props) => {
  
  const { title } = props;

  const { carProducts } = useContext(GeneralContext);

  return (
    <div className="header">
      <h1 className="title">{title}</h1>
        <div className="carrito">
          <NavLink to={routes.carView}>
          <img src={carrito} className="logo-carrito" alt="" />
          </NavLink>
          <span>{carProducts.length}</span>
        </div>
      
    </div>
  );
};

export default Header;
