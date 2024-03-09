import { Button, Modal } from 'react-bootstrap'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'



const ModalMapa = ({showModal, handleCloseModal }) => {


return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
   
        <div className='d-flex between'>
        <Button variant="secondary" onClick={handleCloseModal}>
          Fechar
        </Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>

        </div>
      
  </Modal>
)


}

export default ModalMapa;