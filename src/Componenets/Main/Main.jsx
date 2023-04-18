import React from "react";
import ListaProductos from "./ListaProductos";
import useFetch from "../../Utils/useFetch";
const urlAPI = "https://fakestoreapi.com/products"


const Main = ({setValor}) => {

  const [infoApi,loading] = useFetch(urlAPI)

  return (
    <ListaProductos setValor={setValor} listProducts={infoApi} loading={loading}/>
  )

};

export default Main;
