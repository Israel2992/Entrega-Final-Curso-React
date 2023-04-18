import React, { useEffect } from "react";
import { useState } from "react";
import "./Products.css";
import { useNavigate} from "react-router-dom";
import { routes } from "../../routes";
//import swal from 'sweetalert';  lo mismo que un alert pero mas bonito 
import { ToastContainer} from 'react-toastify';
import notification from "../../Utils/notification";
import notificationAdd from "../../Utils/notificationAdd";
import notificationRest from "../../Utils/notificationRest";


const Products = (props) => {
  const { dataProducts, handlesumar, handlerestar, total } = props;
  const { id:idProduct, title, price, image } = dataProducts;

  const cantidad = 20   // esto seta la cantidad de stock total para todos los productos 
  const [count, setCount] = useState(cantidad);
  const navigator = useNavigate();

  // metodo para redirencionar un enlace dinamico, guardado en una funcion
  const detailView = () =>{
    navigator(`${routes.detailProductView.replace(":idProduct",idProduct)}`)
  };


  //Funcion para sumar elementos al carrtio 
  const agregarCarrito = () => {
    if (count > 0) {
      setCount(count - 1);
      handlesumar();
      notificationAdd(dataProducts);
    } else {
      notification("No queda stock");
    }
  }

  
  //Funcion para eliminar elementos del carrtio 
  const eliminarCarrito = () => {
    if (total >= 1 && count < cantidad) {
      setCount(count + 1);
      handlerestar();
      notificationRest(dataProducts);
    }
    else if (total >= 1 && count >= cantidad){
      notification("No tienes este producto en tu carrito");
    }
    else{
      notification("No tienes productos en el carrito");
    }
  };


  // esta funcion permite disminuir la cantidad de texto 
  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
  };


  return (
    <div className="productos">
       
       
      {/* <NavLink to= {`/products/detail/${idProduct}`}>
      <button className="btn btn-secondary btn-sx" > Detalle del Producto</button>
      </NavLink> */}
      
      <button className="btn btn-secondary btn-sm" onClick={detailView} > Detalle del Producto</button>

      <img src={image} alt="" className="imagen"/>
      <p className="title-Products">{showShortValue(title)}</p>
      <p className="price">${price}</p>
      <button onClick={agregarCarrito} className="btn btn-primary"> Agregar al Carrito</button>
      <button onClick={eliminarCarrito} className="btn btn-danger"> Eliminar del Carrito</button>
      <ToastContainer />
    </div>
  );
};

export default Products;
