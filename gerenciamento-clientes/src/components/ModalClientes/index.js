import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

const clientes = [
  {
    id: 1,
    nome: "Bispo",
    email: "bispo@email.com",
    telefone: "81992014121",
    latitude: "-8.06748160",
    longitude: "-34.89464320",
  },
  {
    id: 2,
    nome: "Oliveira",
    email: "oliver@email.com",
    telefone: "81999912121",
    latitude: "-8.07175900",
    longitude: "-34.90105500",
  },
  {
    id: 6,
    nome: "Julio",
    email: "juliO@gmail.com",
    telefone: "81992121213",
    latitude: "-8.08701300",
    longitude: "-34.91607500",
  },
  {
    id: 7,
    nome: "dolfo",
    email: "dolfo@gmail.com",
    telefone: "81981827121",
    latitude: "-8.11441700",
    longitude: "-34.90594700",
  },
  {
    id: 5,
    nome: "indira",
    email: "indira@example.com",
    telefone: "81912121212",
    latitude: "-8.05862900",
    longitude: "-34.93967900",
  },
  {
    id: 4,
    nome: "Bruna",
    email: "bruna1@email.com",
    telefone: "81921212134",
    latitude: "-8.04945100",
    longitude: "-34.93122400",
  },
];

const ModalMapaClientes = ({ open, handleClose, clientesl }) => {
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
        <Popup>{cliente.id}</Popup>
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
