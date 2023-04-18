

import 'react-toastify/dist/ReactToastify.css';
import { toast} from 'react-toastify';

const notification = (msj) => {
    
        toast.info(`${msj}`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
};

export default notification; 