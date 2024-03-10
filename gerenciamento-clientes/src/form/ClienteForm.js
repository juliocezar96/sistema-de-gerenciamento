import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import ClienteApiImpl from "../rest/ClienteApi";

function ClienteForm({ onClose }) {
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    telefone: "",
    latitude: "",
    longitude: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nome, email, telefone, latitude, longitude } = formValues;

    const newFormErrors = {};
    if (!nome) newFormErrors.nome = "Campo 'Nome' é obrigatório";
    if (!email) newFormErrors.email = "Campo 'Email' é obrigatório";
    if (!telefone) newFormErrors.telefone = "Campo 'Telefone' é obrigatório";
    if (!latitude) newFormErrors.latitude = "Campo 'Latitude' é obrigatório";
    if (!longitude) newFormErrors.longitude = "Campo 'Longitude' é obrigatório";

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    try {
      await ClienteApiImpl.criarCliente(
        nome,
        email,
        telefone,
        latitude,
        longitude
      );
      alert("Cliente criado com sucesso!");
      setFormValues({
        nome: "",
        email: "",
        telefone: "",
        latitude: "",
        longitude: "",
      });
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert("Erro ao criar cliente. Verifique o console para mais detalhes.");
    }
  };

  return (
    <Box p={2} bgcolor="background.default">
      <Typography variant="h5" gutterBottom>
        Cadastrar Novo Cliente
      </Typography>
      <Box mt={2}>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {Object.keys(formValues).map((fieldName) => (
                <Grid
                  item
                  xs={
                    fieldName === "latitude" || fieldName === "longitude"
                      ? 6
                      : 12
                  }
                  key={fieldName}
                >
                  <TextField
                    label={
                      fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                    }
                    variant="outlined"
                    fullWidth
                    name={fieldName}
                    value={formValues[fieldName]}
                    onChange={handleChange}
                  />
                  <FormHelperText error>{formErrors[fieldName]}</FormHelperText>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormControl>
      </Box>
    </Box>
  );
}

export default ClienteForm;
