import { Container } from "react-bootstrap";
import React from "react";
import NavButtons from "./NavButtons";
import Scores from "./Scores.js";
function App() {
  return (
    <Container className="App">
      
      <header className="App-header">
        <h1>HSE Sports App</h1>
      </header>
      <div>
        <Scores />
      </div>
      <NavButtons />
    </Container>
  );
}

export default App;
