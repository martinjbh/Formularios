import React, { useState } from 'react';

const FormularioFetch = () => {
    const [datos, setDatos] = useState({})
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        fetch("http://localhost:3002/ApiFetch", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(datos), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
          document.getElementById("inp1").value=""
          document.getElementById("inp2").value=""  
    }
    return (
        <div>
            <h1>FormularioFetch</h1>
            <form  onSubmit={handleSubmit}>
                <div >
                    <input id="inp1" type="text" placeholder="Nombre"  onChange={handleInputChange} name="nombre"></input>
                </div>
                <div >
                    <input id="inp2" type="text" placeholder="Apellido" onChange={handleInputChange} name="apellido"></input>
                </div>
                <button type="submit" >Enviar</button>
            </form>
        </div>
    );
}

export default FormularioFetch;