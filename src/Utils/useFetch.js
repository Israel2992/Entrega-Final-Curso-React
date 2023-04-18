import { useState,useEffect } from "react";


const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState({});
    const [error, setError] = useState({});

useEffect(() => {

    setLoading(true)     // 1.1 me permite identificar si corrio la api, se coloca true porque se da un inici0

    fetch(url)
    .then((resolve) => {
        setResponse(resolve)
        return resolve.json()      // 2.1 se combierte a formato JSON
    })
    .then((infoJson) => {
        setInfoApi(infoJson)
        setLoading(false)       // 1.2 se coloca false nuevamente porque se supone que termino de correr
    })
    .catch((reject) => {
        setError(reject)        // 3.1 se coloca el error 
    })
},[url])

    return [infoApi,loading,error,response]          // el orden importa al momento de llamar la funcion
};

export default useFetch;