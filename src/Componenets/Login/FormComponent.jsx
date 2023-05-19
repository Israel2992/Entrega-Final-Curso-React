import React from "react";

const FormComponent = (props) => {

    const {title,type,text,manejadorCambio,value,name} = props

  return (
    <div className="form-group mb-3">
      <label className="fw-bold fs-5">{title}</label>
      <input
        type= {type}
        className="form-control"
        placeholder= {text}
        value={value} // esto es el value que tiene el input, lo que se setea 
        name={name}
        onChange ={manejadorCambio}
      />
    </div>
  );
};

export default FormComponent;
