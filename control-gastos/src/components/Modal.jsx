import CerrarModal from '../img/cerrar.svg'

const Modal = ({setModal, animarModal}) => {



const ocultarModal = () => {
    setModal(false)    
}

  return <div className="modal">
    <div className="cerrar-modal" >
        <img 
        src={CerrarModal}
        alt='cerrar-modal'
        height= '200' 
        onClick={ocultarModal}   
        cursor='pointer'       
        />
    </div>

    <form className='formulario'>
        <legend>Nuevo gasto</legend>
    </form>
        
  </div>;
};

export default Modal;
