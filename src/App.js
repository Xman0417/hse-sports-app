import { Container } from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";
function App() {
  return (
    <Container className="App">
      <NavBar />
      <header className="App-header">
        <h1>HSE Sports App</h1>
      </header>
    </Container>
  );
}

export default App;
