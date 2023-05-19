import React, { useContext } from "react";
import "../../CSS/Products.css";
import { useNavigate} from "react-router-dom";
import { routes } from "../../routes";
import { ToastContainer} from 'react-toastify';
import notification from "../../Utils/notification";
import notificationAdd from "../../Utils/notificationAdd";
import notificationRest from "../../Utils/notificationRest";
import GeneralContext from "../../Context/GeneralContext";




const Products = (props) => {
  const { dataProducts,agregarBotton,eliminarBotton,regresarBotton} = props;
  const { id:idProduct, title, price, image } = dataProducts;
  
  // metodo para redirencionar un enlace dinamico, guardado en una funcion
  const navigator = useNavigate();
  const detailView = () =>{
    navigator(`${routes.detailProductView.replace(":idProduct",idProduct)}`)
  };

  
  const {carProducts,addToCar,removeToCar} = useContext(GeneralContext);


  //Funcion para sumar elementos al carrtio 
  const agregarCarrito = () => {
    if (carProducts.length === 0) {
      addToCar(dataProducts);
      notificationAdd(dataProducts);
    } else if (carProducts.length > 0) {
      const isAlreadyInCart = carProducts.some((element) => element.id === dataProducts.id);
      if (!isAlreadyInCart) {
        addToCar(dataProducts);
        notificationAdd(dataProducts);
      } else {
        notification("Ya tienes este producto en el carrito");
      }
    }
  
  }

  
  //Funcion para eliminar elementos del carrtio 
  const eliminarCarrito = () => {
    removeToCar(dataProducts)
    notificationRest(dataProducts);
  };

  
  //Funcion para  regresar a la pagina principal
  const backBotton = () => {
    navigator(routes.root)
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
      {agregarBotton ? (<button onClick={agregarCarrito} className="btn btn-primary"> Agregar al Carrito</button>): ("")}
      {eliminarBotton ? (<button onClick={eliminarCarrito} className="btn btn-danger"> Eliminar del Carrito</button>) : ('')}
      {regresarBotton ? (<button onClick={backBotton} className="btn btn-secondary btn-sx">Regresar</button>) : ('')}
      <ToastContainer />
    </div>
  );
};

export default Products;
