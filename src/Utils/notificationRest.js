
import 'react-toastify/dist/ReactToastify.css';
import { toast} from 'react-toastify';

const notificationRest = (infoProducts) => {

    const {title} = infoProducts;

   return (
    toast.error(`${title} eliminado del carrito`, {
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

export default notificationRest; 