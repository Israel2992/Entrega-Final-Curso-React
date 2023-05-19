import React,{Fragment,useContext} from "react";
import { useNavigate,useParams } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import { routes } from "../routes";
import "../CSS/DetailProductView.css"
import GeneralContext from "../Context/GeneralContext";
import { ToastContainer } from "react-toastify";
import notification from "../Utils/notification";
import notificationAdd from "../Utils/notificationAdd";


const urlAPI = "https://fakestoreapi.com/products"

const DetailProductView = () =>{
    const {idProduct} = useParams();
    const navigator = useNavigate();
   
    const [InfoApi] = useFetch(`${urlAPI}/${idProduct}`);
    const {title,price,description,category,image} = InfoApi
    
    const BottonBack = () => {
        navigator(routes.root)
    };

    const {carProducts,addToCar} = useContext(GeneralContext)
    
    const agregar = () => {
        if (carProducts.length === 0) {
            addToCar(InfoApi);
            notificationAdd(InfoApi);
          } else if (carProducts.length > 0) {
            const isAlreadyInCart = carProducts.some((element) => element.id === InfoApi.id);
            if (!isAlreadyInCart) {
            addToCar(InfoApi);
              notificationAdd(InfoApi);
            } else {
              notification("Ya tienes este producto en el carrito");
            }
          }
    }



    return(
        <Fragment>
            <div className="container-detail">
                <div className="box">
                <p className="container-detail-title">{title}</p>
                <img src={image} alt="" className="container-detail-img"/>
                <p className="container-detail-price">${price}</p>
                <p className="container-detail-description">{description}</p>
                <p className="container-detail-category">Categoria: {category}</p>
                <button onClick={agregar} className="btn btn-primary"> Agregar al Carrito</button>
                <button onClick={BottonBack} className="btn btn-secondary btn-sx">Regresar</button>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    );
};

export default DetailProductView;