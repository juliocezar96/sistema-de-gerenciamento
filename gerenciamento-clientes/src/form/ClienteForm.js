import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ClienteApiImpl from '../rest/ClienteApi';

function ClienteForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ClienteApiImpl.criarCliente(nome, email, telefone, latitude, longitude);
      alert('Cliente criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      alert('Erro ao criar cliente. Verifique o console para mais detalhes.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formTelefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Digite o telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formLatitude">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formLongitude">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default ClienteForm;
