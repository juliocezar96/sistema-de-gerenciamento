import React, { useEffect, useState } from "react";
import { Modal, Typography, Button } from "@mui/material";
import ClienteApiImpl from "../../rest/ClienteApi";

const CustomModal = ({ open, handleClose, cliente }) => {
  const [clienteData, setClienteData] = useState(null);

  useEffect(() => {
    const fetchClienteData = async () => {
      try {
        const response = await ClienteApiImpl.buscarDetalhesCliente(cliente.id);
        setClienteData(response);
      } catch (error) {
        console.error("Erro ao buscar detalhes do cliente:", error);
      }
    };

    if (cliente) {
      fetchClienteData();
    }
  }, [cliente]);

  return (
    <Modal open={open} onClose={handleClose}>
      {clienteData && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Detalhes do Cliente
          </Typography>
          <Typography variant="body1">Nome: {clienteData.nome}</Typography>
          <Typography variant="body1">Email: {clienteData.email}</Typography>
          <Typography variant="body1">
            Telefone: {clienteData.telefone}
          </Typography>
          <Button variant="contained" onClick={handleClose}>
            Fechar
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default CustomModal;
