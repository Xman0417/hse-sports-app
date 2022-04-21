import { Container } from "react-bootstrap";
import { useState, React } from "react";
import NavButtons from "./NavButtons";
import MainContent from "./MainContent";

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <Container className="App">
      <header className="App-header">
      <h1 style ={{textAlign: "center", fontStyle: "italic", color: "blue"}}>HSE SPORTS APP</h1>
      </header>
      <div style= {{color: "black", backgroundColor: "dark-grey"}}>
        <MainContent screen = {screen}/>
      </div>
      <NavButtons setScreen = {setScreen} />
    </Container>
  );
}

export default App;
