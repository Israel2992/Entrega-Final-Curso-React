import React from "react";
import Option from "./Option";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const ListOption = (props) => {
  const { nameOption } = props;

  return (
    <ul className="navbar-nav">
      
      <NavLink to={routes.root}>
        <li className="nav-item ">
          <p className="nav-link ">Home</p>
        </li>
      </NavLink>

      {nameOption.map((nameItem, index) => {
        return <Option key={index} nameOption={nameItem} />;
      })}

    </ul>
  );
};

export default ListOption;
