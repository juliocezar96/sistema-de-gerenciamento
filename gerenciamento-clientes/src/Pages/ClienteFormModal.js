import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";
import ClienteApiImpl from "../rest/ClienteApi";

const ClienteFormModal = ({ showModal, handleCloseModal }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ClienteApiImpl.criarCliente(
        nome,
        email,
        telefone,
        latitude,
        longitude
      );
      alert("Cliente criado com sucesso!");
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert("Erro ao criar cliente. Verifique o console para mais detalhes.");
    }
  };

  return (
    <Modal open={showModal} onClose={handleCloseModal}>
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
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Telefone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <TextField
            label="Latitude"
            variant="outlined"
            fullWidth
            margin="normal"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            label="Longitude"
            variant="outlined"
            fullWidth
            margin="normal"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ClienteFormModal;
