import { useState } from "react";


const useFetchPostUsuarios = (url,form) => {
    
    // creo este formValues donde se almacena el formato o estado incial del del form
    const [formValues,setFormValues] = useState(form);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);


    // genero el llamado de la API 
    const handleSubmit = (evento) => {
        evento.preventDefault()
        setLoading(true)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formValues)   
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error al tratar de enviar el formulario")
            }
            setLoading(false)
            setError(null)

            //con esto me aseguro de que volver a colocar el estado inicial del form depues de almacenar la info
            setFormValues(form)
        })
        .catch( error => {
            setLoading(false)
            setError(error.message)
        }
        )
    };
    const handleInputChange = (evento) => {
        const {name, value} = evento.target
        setFormValues({...formValues, [name]: value})
    }
    return [formValues,handleSubmit,handleInputChange,loading,error]
}


export default useFetchPostUsuarios;

