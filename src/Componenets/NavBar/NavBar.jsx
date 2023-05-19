import React from "react";
import ListOption from "./ListOption";
import 'bootstrap/dist/js/bootstrap.min.js';
import useFetch from "../../Utils/useFetch";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
const urlAPI = "https://fakestoreapi.com/products/categories"


const NavBar = () => {

  const [infoApi] = useFetch(urlAPI)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to= {routes.root}>
        <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ListOption nameOption={infoApi}/>
        </div>
        <NavLink to={routes.loginView}>
          <div>
            <p className="text-primary">Iniciar Sesion</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
