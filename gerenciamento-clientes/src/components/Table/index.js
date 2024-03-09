import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import VisualizarIcon from "../Icon";

export default function BasicTable({ clientes }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cliente) => (
            <TableRow
              key={cliente.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {cliente.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {cliente.nome}
              </TableCell>
              <TableCell align="right">{cliente.email}</TableCell>
              <TableCell align="right">{cliente.telefone}</TableCell>
              <TableCell align="right">
                <VisualizarIcon clienteId={cliente.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
