import { useEffect, useState } from "react";
import ClienteApiImpl from "../rest/ClienteApi";
import CustomModal from "../components/Modal";

import BasicTable from "../components/Table";
import { Button } from "@mui/material";

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="container d-flex flex-column">
      <div className="">
        <h1>Sistema de Gerenciamento de Clientes</h1>
      </div>

      <div className="">
        <BasicTable clientes={clientes} />
      </div>

      <Button onClick={handleOpen}>Open modal</Button>

      <CustomModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Cliente;
