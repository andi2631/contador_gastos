import { useState } from 'react'
import Header from './components/Header'
import nuevoGasto from './img/nuevo-gasto.svg' 
import Modal from './components/Modal'

function App() {
  
const [presupuesto, setPresupuesto] = useState(0) //como lo voy a pasar por varios componentes, me conviene setearlo en app
const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
const [modal, setModal] = useState(false)
const [animarModal, setAnimarModal] = useState(false)

const handleNuevoGasto = () => {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 3000);
}

  return (
   <div>
     <Header
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     isValidPresupuesto={isValidPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}
     />

     {isValidPresupuesto /*si isValidPresupuesto es true, se ejecuta lo siguiente*/ && (<div className='nuevo-gasto'>    
        <img
          src={nuevoGasto} 
          alt='Icono nuevo gasto' 
          onClick={handleNuevoGasto}     
        />
     </div>)}

     {modal /* si se muestra modal, se ejecuta lo de despues del && */&& <Modal setModal={setModal} animarModal={animarModal}/>}
     
   </div>
   
  )
}

export default App
