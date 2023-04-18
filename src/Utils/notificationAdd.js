
import 'react-toastify/dist/ReactToastify.css';
import { toast} from 'react-toastify';

const notificationAdd = (infoProducts) => {

    const {title} = infoProducts;

    return (
        toast.success(`haz agrega el producto ${title} al carrito`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    )
};

export default notificationAdd; 