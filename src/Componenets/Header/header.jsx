import React from "react";
import './header.css'


const Header = (props) =>{

    const {title} = props

    return(
        <h1 className="title">{title}</h1>
    );
};


export default Header;