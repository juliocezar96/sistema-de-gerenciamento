import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import VisualizarIcon from "../Icon";
import ModalMapa from "../Modal";
import ModalMapaClientes from "../ModalClientes";
import MapIcon from "@mui/icons-material/Map";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalForm from "../ModalForm/index";

export default function BasicTable({ clientes }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [openModalForm, setOpenModalForm] = useState(false);
  const handleOpenModalForm = () => setOpenModalForm(true);
  const handleCloseModalForm = () => setOpenModalForm(false);

  const [clienteAtivo, setClienteAtivo] = useState();

  const handleClienteAtivo = (cliente) => {
    handleOpen();
    setClienteAtivo(cliente);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "12px 0 12px 0",
        }}
      >
        <Button
          variant="contained"
          onClick={handleOpenModalForm}
          style={{ margin: "10px" }}
        >
          <AddCircleOutlineIcon />
        </Button>

        <Button
          variant="contained"
          onClick={handleOpenModal}
          style={{ margin: "10px" }}
        >
          <MapIcon />
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow
                key={cliente.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {cliente.id}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {cliente.nome}
                </TableCell>
                <TableCell align="left">{cliente.email}</TableCell>
                <TableCell align="left">{cliente.telefone}</TableCell>
                <TableCell align="right">
                  <VisualizarIcon onClick={() => handleClienteAtivo(cliente)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalMapa open={open} handleClose={handleClose} cliente={clienteAtivo} />

      <ModalForm open={openModalForm} handleCloseModal={handleCloseModalForm} />

      <ModalMapaClientes open={openModal} handleClose={handleCloseModal} />
    </>
  );
}
