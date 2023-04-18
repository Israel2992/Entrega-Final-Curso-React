
import {useParams} from "react-router-dom";
import useFetch from "../Utils/useFetch";
import ListaProductos from "../Componenets/Main/ListaProductos";
const urlAPI = "https://fakestoreapi.com/products/category"

const CategoryView = ({setValor,listProducts,loading}) => {
    const {category} = useParams();

    const [infoApi] = useFetch(`${urlAPI}/${category}`);

    return(
        <ListaProductos listProducts={infoApi} setValor={setValor}/>
    );

};

export default CategoryView;