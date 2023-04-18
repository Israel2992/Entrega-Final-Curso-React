import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";


const Option = (props) =>{

    const {nameOption} = props
    
    return(
        <NavLink to={`${routes.categoryView.replace(":category",nameOption)}`}>
        <li className="nav-item ">
            <p className="nav-link" >{nameOption}</p>
        </li>
        </NavLink>
    );
};


export default Option;