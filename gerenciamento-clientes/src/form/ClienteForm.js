import React, { useState } from "react";
import { TextField, Button, FormControl } from "@mui/material";
import ClienteApiImpl from "../rest/ClienteApi";

function ClienteForm({ onClose }) {
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
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert("Erro ao criar cliente. Verifique o console para mais detalhes.");
    }
  };

  return (
    <FormControl onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Telefone"
        variant="outlined"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <TextField
        label="Latitude"
        variant="outlined"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <TextField
        label="Longitude"
        variant="outlined"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </FormControl>
  );
}

export default ClienteForm;
