import { Container } from "react-bootstrap";
import { useState, React } from "react";
import NavButtons from "./NavButtons";

import MainContent from "./MainContent";

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <Container className="App">
      <header className="App-header">
        <h1 style ={{textAlign: "center"}}>HSE Sports App</h1>
      </header>
      <div>
        <MainContent screen = {screen}/>
      </div>
      <NavButtons setScreen = {setScreen} />
    </Container>
  );
}

export default App;
