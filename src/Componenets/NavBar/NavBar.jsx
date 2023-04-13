import React from "react";
import ListOption from "./ListOption";
import 'bootstrap/dist/js/bootstrap.min.js';

const NavBar = () => {

    const listNameOption = ["Camisas","Busos","Pantalones","Pantalonetas","Zapatos","Canguros","Mochilas"]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src="" alt="" />
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
          <ListOption nameOption={listNameOption}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
