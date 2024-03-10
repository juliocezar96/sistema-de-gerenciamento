import React from "react";
import ClienteForm from "../../form/ClienteForm";
import { Modal } from "@mui/material";

const ModalForm = ({ open, handleCloseModal }) => {
  return (
    <Modal open={open} onClose={handleCloseModal}>
      <ClienteForm />
    </Modal>
  );
};

export default ModalForm;
