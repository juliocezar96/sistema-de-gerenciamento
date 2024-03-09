import React from 'react';
import { Button, Modal } from '@mui/material';

const ModalMapa = ({ showModal, handleCloseModal }) => {
  return (
    <Modal open={showModal} onClose={handleCloseModal} centered>
      <div className='d-flex between'>
        <Button variant="secondary" onClick={handleCloseModal}>
          Fechar
        </Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </div>
    </Modal>
  );
};

export default ModalMapa;
