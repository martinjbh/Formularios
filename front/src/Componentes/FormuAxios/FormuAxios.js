import react from "react";
import { useState } from 'react';
import axios from 'axios';
const FormuAxios = () => {

    const [obj, setObj] = useState({})

    const handleInputChange = (event) => {
        setObj({...obj,[event.target.name]: event.target.value})

    }

    const handleSubmit = () => {
        console.log()
        axios.post("http://localhost:3002/ApiAxios",obj         
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>FormuAxios</h1>
                <div>
                    <input onChange={handleInputChange} name="nombre" placeholder="Nombre"></input>
                </div>
                <div>
                    <input placeholder="Nombre" onChange={handleInputChange} name="apellido"></input>
                </div>
                <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}
export default FormuAxios

