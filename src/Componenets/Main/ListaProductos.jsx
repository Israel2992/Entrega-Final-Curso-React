import React, {useState } from "react";
import Products from "./Productos";
import './ListaProductos.css'




const ListaProductos = ({setValor,listProducts,loading}) =>{


  const [sumartotal, setSumarTotal] = useState(0);
  const suma = () => {
    setSumarTotal(sumartotal + 1);
  };

  const [restartotal, setRestarTotal] = useState(0);
  const resta = () => {
    setRestarTotal(restartotal + 1);
  };

  let total = sumartotal - restartotal;

  setValor(total)


  return (
    <div className="Main">
      <div className="listProducts">
        {loading ? (<h1>Cargado lista de productos...</h1>) : (
        listProducts.map((item, index) => {
        return ( <Products key={index} dataProducts={item} handlesumar={suma} handlerestar={resta} total={total}/>
        );
          })
        )}
      </div>
    </div>
  );
    
};

export default ListaProductos;