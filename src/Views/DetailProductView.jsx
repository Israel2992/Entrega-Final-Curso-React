import React,{Fragment} from "react";
import { useNavigate,useParams } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import { routes } from "../routes";
import "../CSS/DetailProductView.css"
const urlAPI = "https://fakestoreapi.com/products"

const DetailProductView = () =>{
    const {idProduct} = useParams();
    const navigator = useNavigate();

    const [InfoApi] = useFetch(`${urlAPI}/${idProduct}`);

    const {title,price,description,category,image} = InfoApi

    const BottonBack = () => {
        navigator(routes.root)
    };

    return(
        <Fragment>
            <div className="container-detail">
                <div className="box">
                <p className="container-detail-title">{title}</p>
                <img src={image} alt="" className="container-detail-img"/>
                <p className="container-detail-price">${price}</p>
                <p className="container-detail-description">{description}</p>
                <p className="container-detail-category">Categoria: {category}</p>
                <button onClick={BottonBack} className="btn btn-secondary btn-sx">Regresar</button>
                </div>
            </div>
        </Fragment>
    );
};

export default DetailProductView;