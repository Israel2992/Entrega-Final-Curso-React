import React from "react";
import Option from "./Option";
import 'bootstrap/dist/js/bootstrap.min.js';


const ListOption = (props) =>{

    const {nameOption} = props

    return (
        <ul className="navbar-nav">
           {nameOption.map((nameItem, index) => {
            return <Option key = {index} nameOption={nameItem}/>
           })}
        </ul>
    )
};


export default ListOption;