import React from "react";
import ListaProductos from "./ListaProductos";
import useFetch from "../../Utils/useFetch";
const urlAPI = "https://fakestoreapi.com/products"


const Main = () => {

  const [infoApi,loading] = useFetch(urlAPI)

  return (
    <ListaProductos listProducts={infoApi} loading={loading}/>
  )

};

export default Main;
