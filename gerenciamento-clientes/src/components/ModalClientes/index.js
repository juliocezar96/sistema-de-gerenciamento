import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ClienteApiImpl from "../../rest/ClienteApi";

import L from "leaflet";

const ModalMapaClientes = ({ open, handleClose }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClienteApiImpl.buscarRotas();
        setClientes(response);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchData();
  }, []);

  const NumberedMarker = ({ cliente, number }) => {
    const position = {
      lat: cliente.latitude,
      lng: cliente.longitude,
    };

    const icon = L.divIcon({
      html: `<div style="display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; background-color: red; color: white; border-radius: 50%;">${number}</div>`,
    });

    return (
      <Marker position={position} icon={icon}>
        <Popup>{cliente.nome}</Popup>
      </Marker>
    );
  };

  const center = {
    lat: clientes[0]?.latitude,
    lng: clientes[0]?.longitude,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "15px 20px",
          width: "828px",
          height: "700px",
          bgcolor: "background.paper",
        }}
      >
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {clientes.length > 0 &&
            clientes?.map((cliente, index) => (
              <NumberedMarker
                key={index}
                cliente={cliente}
                number={index + 1}
              />
            ))}
        </MapContainer>
      </Box>
    </Modal>
  );
};

export default ModalMapaClientes;
