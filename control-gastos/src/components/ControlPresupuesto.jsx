import React from 'react';

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => { //esta funcion convierte a dolares el presupuesto numero insertado
      return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }

  return <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

      <div>
        <p>Gafica aqui</p>
      </div>

      <div className='contenido-presupuesto'>
          <p>
            Presupuesto:  <span className='pres'>{`${formatearCantidad(presupuesto)}`}</span>
          </p>
          <p>
            Disponible:  <span className='pres'>{`${formatearCantidad(0)}`}</span>
          </p>
          <p>
            Gastado:  <span className='pres'>{`${formatearCantidad(0)}`}</span>
          </p>

      </div>


  </div>;
};

export default ControlPresupuesto;
