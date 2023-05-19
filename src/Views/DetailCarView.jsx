import React from "react";
import { Fragment } from "react";
import { useContext } from "react";
import GeneralContext from "../Context/GeneralContext";
import Products from "../Componenets/Main/Productos";
import "../CSS/DetailCarView.css";
import BuyComponent from "../Componenets/Main/BuyComponent";
import swal from 'sweetalert';  //lo mismo que un alert pero mas bonito 



const DetailCarView = () => {
  const { carProducts} = useContext(GeneralContext);

  const mostrarNotificacion = () =>{
    swal('¡UPS!', 'No tienes nada en el carrito', 'error')
  };

  return (
    <Fragment>
      {carProducts.length > 0? (<div className="container">
        <h1>Productos Seleccionados</h1>
        <div className="container-productos">
          {carProducts.map((elemt, index) => {
            return (<Products key={index} dataProducts={elemt} contador={true} eliminarBotton={true}/>);
          })}
        </div>
      </div>) : (
      <div className="container-text">
        {mostrarNotificacion()}
        <p>Selecciona algo que desees comprar</p>
      </div>)}
      {carProducts.length > 0? <BuyComponent/> : ""}
    </Fragment>
  );
};

export default DetailCarView;
