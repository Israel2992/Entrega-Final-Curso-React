import React from "react";
import Products from "./Productos";
import '../../CSS/ListaProductos.css'




const ListaProductos = ({listProducts,loading}) =>{

  return (
    <div className="Main">
      <div className="listProducts">
        {loading ? (<h2>Cargado lista de productos...</h2>) : (
        listProducts.map((item, index) => {
        return ( <Products key={index} dataProducts={item} agregarBotton={true} />
        );
          })
        )}
      </div>
    </div>
  );
    
};

export default ListaProductos;