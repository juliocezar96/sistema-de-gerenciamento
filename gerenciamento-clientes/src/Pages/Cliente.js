import { useEffect, useState } from "react";
import ClienteApiImpl from "../rest/ClienteApi";

import BasicTable from "../components/Table";

const Cliente = () => {
  const [clientes, setClientes] = useState([]);

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
    <div>
      <div className="">
        <h1>Sistema de Gerenciamento de Clientes</h1>
      </div>

      <div className="">
        <BasicTable clientes={clientes} />
      </div>
    </div>
  );
};

export default Cliente;
