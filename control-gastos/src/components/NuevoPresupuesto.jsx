import React from 'react'
import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

   
    

    const handlePresupuesto = (e/*event*/) => {
        e.preventDefault();
        console.log('enviando')

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto válido')
            return; 
            
        } 

        setMensaje('Contenido Correcto')
        setIsValidPresupuesto(true)
        

    }

    return (
        <div className='contendeor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu presupuesto'
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />

                </div>

                <input type="submit" value='añadir'/>
                {mensaje === '' ? <Mensaje tipo="vacio">!ingrese su presupuesto!</Mensaje> 
                : mensaje === 'No es un presupuesto válido' ? 
                <Mensaje tipo="error">{mensaje/*esto es el children y el tipo error es la prop que se le pasa*/ }</Mensaje> :
                 <Mensaje tipo="successfull">{mensaje/*esto es el children y el tipo error es la prop que se le pasa*/ }</Mensaje>
                }



            </form>
        </div>
    )
}

export default NuevoPresupuesto
