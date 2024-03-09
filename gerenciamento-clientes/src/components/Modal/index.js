import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ showModal, handleCloseModal, title, children }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer className='d-flex between'>
        <button className="btn btn-secondary" onClick={handleCloseModal}>
          Fechar
        </button>

        <button className="btn btn-primary" type='submit'>
          Salvar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
