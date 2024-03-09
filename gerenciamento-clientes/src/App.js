import React, { useState, useEffect } from "react";
import "./App.css";
import ClienteApiImpl from "./rest/ClienteApi";
import TableC from "./components/Table/index";
import Modal from "./components/Modal";
import ClienteFormModal from "./Pages/ClienteFormModal"; 
import Mapa from "./Pages/Mapa"; 

function App() {
  const [clientes, setClientes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClienteApiImpl.buscarClientes();
        setClientes(response);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = (content) => {
    setModalContent(content);
    handleShowModal();
  };

  return (
    <div className="container d-flex flex-column">
      <div className="">
        <h1>Sistema de Gerenciamento de Clientes</h1>
      </div>

      <div className="d-flex row-reverse mb-5">
        <button type="button" className="btn btn-primary" onClick={() => handleOpenModal(<ClienteFormModal />)}>
          Adicionar Cliente
        </button>
      </div>

      <div className="">
        <TableC clientes={clientes} handleOpenMap={handleOpenModal} />
      </div>

      <Modal showModal={showModal} handleCloseModal={handleCloseModal}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default App;
