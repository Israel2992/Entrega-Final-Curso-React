import React from "react";
import { Fragment} from "react";
import { useState } from "react";
import "../../CSS/ItemCount.css"


const ItemCount = () => {


    const [cantidadPorProducto,setCantidadPorProducto] = useState(0)

    const handleSumar = () =>{ 
        setCantidadPorProducto(cantidadPorProducto + 1)
    }

    const handleRestar = () =>{
        if(cantidadPorProducto > 0){
            setCantidadPorProducto(cantidadPorProducto - 1)
        }
    }

    return(
        <Fragment>
            <div className="container-item-count" >
                <button onClick={handleRestar} className="boton-estilo">
                    -
                </button>
                <div className="container-text">
                    <p>{cantidadPorProducto}</p>
                </div>
                <button onClick={handleSumar} className="boton-estilo">
                    +
                </button>
            </div>
        </Fragment>
    )
};

export default ItemCount;