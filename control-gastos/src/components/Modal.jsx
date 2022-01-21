import CerrarModal from '../img/cerrar.svg'

const Modal = ({setModal}) => {

const ocultarModal = () => {
    setModal(false)
    setTimeout(() => {
        
    }, 3000);
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
