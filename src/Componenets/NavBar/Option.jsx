import React from "react";
import 'bootstrap/dist/js/bootstrap.min.js';


const Option = (props) =>{

    const {nameOption} = props
    
    return(
        <li className="nav-item">
            <span className="nav-link" href="#">{nameOption}</span>
        </li>
    );
};


export default Option;