import React, { useEffect, useState } from "react";
import Products from "./Productos";
import './ListaProductos.css'

const ListaProductos = () =>{

  const [listProduts, setListProduts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {        // la fnc setTimeut se efecuta desde un cierto tiempo
        resolve([
          {
            img: `https://http2.mlstatic.com/D_NQ_NP_701497-MLA31130240139_062019-W.jpg`,
            text: "Camisa",
            cantidad: 10,
          },
          {
            img: `https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf3a.png`,
            text: "Pantalon",
            cantidad: 15,
          },
          {
            img: `https://www.duracolor.co/components/com_virtuemart/shop_image/product/resized/Buso_con_capota__5dbb41e068cbf_233x233.jpg`,
            text: "Buso",
            cantidad: 20,
          },
        ]);
      }, 1000);     // aqui se puede ver que esta para 5 segundos
    })
      .then((result) => {       // .then ejecuta en caso de la resolucion exitosa del promise y pueden haber varios
        setListProduts(result);
      })
      .catch(() => {
        console.log("ups algo fallo");  // esto muestra un mensaje de error en caso tal 
      });
  }, []);



  const [sumartotal, setSumarTotal] = useState(0);
  const suma = () => {
    setSumarTotal(sumartotal + 1);
  };

  const [restartotal, setRestarTotal] = useState(0);
  const resta = () => {
    setRestarTotal(restartotal + 1);
  };

  let total = sumartotal - restartotal;

  return (
    <div className="Main">
      <h1>Total: {total}</h1>
      <div className="listProducts">
        {listProduts.length === 0 ? (<h1>Cargado lista de productos...</h1>) : (
        listProduts.map((item, index) => {
        return ( <Products key={index} dataProducts={item} handlesumar={suma} handlerestar={resta} total={total}/>
        );
          })
        )}
      </div>
    </div>
  );
    
};

export default ListaProductos;