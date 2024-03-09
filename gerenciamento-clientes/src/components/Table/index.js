import React from "react";
import Table from "react-bootstrap/Table";
import Mapa from "../../Pages/Mapa";

const TableC = ({ clientes, handleOpenMap }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefone}</td>
            <td className="d-flex aligen-items-center justify-content-center">
              <button type="button" className="btn btn-outline-secondary" onClick={() => handleOpenMap(<Mapa />)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableC;
