import "../../CSS/BuyComponent.css";
import React, { useContext } from "react";
import { Fragment } from "react";
import GeneralContext from "../../Context/GeneralContext";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import swal from 'sweetalert';  //lo mismo que un alert pero mas bonito 



const BuyComponent = () => {

  const { carProducts } = useContext(GeneralContext);
  const navigator = useNavigate();

  // suma todos los items del carrito
  const totalCompra = useMemo(() => {
    return carProducts.reduce(
      (sumaProductos, items) => sumaProductos + items.price,
      0
    );
  }, [carProducts]);

  //accionables del boton comprar
  const botonComprar = () => {
   swal('¡Gracias!', 'Tu compra ha sido confirmada', 'success');
    setTimeout(() => {
      navigator(routes.root);
      setTimeout(() => {
        window.location.reload(); // Actualizar la página después de 1 segundo
      }, 1000);
    }, 2000);
  };

  return (
    <Fragment>
      <div className="container-buy-component">
        <h2>Resumen Final de tu Compra</h2>
        <div className="container-buy-compoenent-item">
          <div className="container-buy-compoenent-item-detail">
            <h4 className="titulo-h4">Productos Selecionados</h4>
            <ul>{carProducts.map((items) => {
              return <li className="items">{items.title} </li>;
            })}</ul>
          </div>
          <p className="text-items">Cantidad de Articulos: <p className="value">{carProducts.length}</p></p>
          <p className="text-items">Total de Compra: <p className="value">{totalCompra.toFixed(2)}</p></p>
          <button onClick={botonComprar} className="boton-comprar btn btn-dark">Comprar</button>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyComponent;
