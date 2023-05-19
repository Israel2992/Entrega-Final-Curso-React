import { Fragment } from "react";
import React from "react";
import "../CSS/Login.css"
import useFetchPostUsuarios from "../Utils/useFetchPostUsuarios";
import FormComponent from "../Componenets/Login/FormComponent";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import swal from 'sweetalert';  //lo mismo que un alert pero mas bonito 

const LoginView = () => {
  
  // esto da el formato para el estado inicial con el que emepzara el form, es decir es 
  const form = {
    nombre: "",
    email: "",
    celular: "",
    pass1: "",
    pass2: "",
  }

  // url de la api, esta es una API tipo base de batos. 
  const urlApi = "https://63d485980e7ae91a009e7517.mockapi.io/nuevosUsuarios"

  // el custom hook recibe dos argumentos, la url de la API y el formato JSON de como va almacenar la info del formulario
  const [formValues,handleSubmit,handleInputChange] = useFetchPostUsuarios(urlApi,form)

  const navigator = useNavigate();

  const enviarForm = (event) =>{
    event.preventDefault();
    swal('¡Registro Exitoso!', 'Bienvenido', 'success');
    setTimeout(() => { navigator(routes.root); // Redireccionar después de 2 segundos
    },2000);
    
  };

  return (
    <Fragment>
      <div className="container-login" onSubmit={handleSubmit}>
        <form className="form-login" onSubmit={enviarForm}>
          <FormComponent
            title="Nombre de Usuario"
            type="text"
            text="Ingresa un nombre de usuario"
            manejadorCambio={handleInputChange}
            value = {formValues.nombre}
            name= "nombre"      // este tiene que tener el mismo nombre que la key del JSON
          />
          <FormComponent
            title="Email"
            type="email"
            text="Ingresa un email"
            manejadorCambio={handleInputChange}
            value ={formValues.email}
            name= "email"
          />
          <FormComponent
            title="Celular"
            type="text"
            text="Ingresa un número celular"
            manejadorCambio={handleInputChange}
            value ={formValues.celular}
            name= "celular"
          />
          <FormComponent
            title="Contraseña"
            type="password"
            text="Ingresa un Contraseña"
            manejadorCambio={handleInputChange}
            value ={formValues.pass1}
            name= "pass1"
          />
          <FormComponent
            type="password"
            text="Confirma la contraseña"
            manejadorCambio={handleInputChange}
            value ={formValues.pass2}
            name= "pass2"
          />
          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-auto" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginView;
