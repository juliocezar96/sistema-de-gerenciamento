import React from "react";
import { Button, Icon } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const VisualizarIcon = ({ onClick }) => {
  return (
    <>
      <Button variant="outlined" onClick={onClick}>
        <PlaceIcon />
      </Button>
    </>
  );
};

export default VisualizarIcon;
