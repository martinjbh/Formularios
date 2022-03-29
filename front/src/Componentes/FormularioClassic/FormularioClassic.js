
import React, { useState} from 'react';

const FormularioClassic = () => {
  
    return (
        <div>
            <h1>FormularioClassic</h1>
            <form className="row" method='post' action="http://localhost:3002/ApiClassic">
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control"  name="apellido"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            
            
        </div>
    );
}
 
export default FormularioClassic;