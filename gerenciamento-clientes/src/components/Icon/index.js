import React from "react";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const VisualizarIcon = ({ onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      <VisibilityIcon />
    </Button>
  );
};

export default VisualizarIcon;
