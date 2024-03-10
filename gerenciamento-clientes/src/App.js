import React from "react";
import "./App.css";
import Cliente from "./Pages/Cliente";
import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Cliente />
      </Container>
    </div>
  );
}

export default App;
