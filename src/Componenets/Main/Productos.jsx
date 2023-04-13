import React from "react";
import { useState } from "react";
import "./Products.css";

const Products = (props) => {
  const { dataProducts, handlesumar, handlerestar,total } = props;
  const { img, text, cantidad } = dataProducts;

  const [count, setCount] = useState(cantidad);

  const agregarCarrito = () => {
    if (count > 0) {
      setCount(count - 1);
      handlesumar();
    } else {
      alert("No queda stock");
    }
  };

  const eliminarCarrito = () => {
    if (total >= 1 && count < cantidad) {
      setCount(count + 1);
      handlerestar();
    }
    else if (total >= 1 && count >= cantidad){
      alert("No tienes este producto en tu carrito");
    }
    else{
      alert("No tienes nada en el carrito");
    }
  };

  return (
    <div className="productos">
      <img src={img} alt="" className="imagen" />
      <p className="descripcion">{text}</p>
      <p className="cantidad">Disponible:{count}</p>
      <button onClick={agregarCarrito} className="btn btn-primary"> Agregar al Carrito</button>
      <button onClick={eliminarCarrito} className="btn btn-danger"> Eliminar del Carrito</button>
    </div>
  );
};

export default Products;
