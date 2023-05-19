

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notification = (message) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

export default notification; 