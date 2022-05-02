import { Container } from "react-bootstrap";
import { useState, React } from "react";
import NavButtons from "./NavButtons";
import MainContent from "./MainContent";
//Main app function of the HSE Sports App. Constains all of the components necessary to create the screen

function App() {
  //This useState tracks the screen for MainContent.js. The screen is changed in NavButtons.js.
  //When screen = 1, the component in Scores.js appears
  //When screen = 2, the component in Tweets.js appears
  //When screen = 3, the component in News.js appears
  //When Screen = 4, the component in Credits.js appears
  //More detail on how this works is found in MainContent.js and NavButtons.js
  const [screen, setScreen] = useState(1);

  return (
    <Container fluid className="App">
      <header className="App-header" >
        <h2 style ={{textAlign: "center", fontStyle: "italic", color: "blue", borderBottom:"1px solid gray"}}>HSE SPORTS APP</h2>
      </header>
      <div style= {{color: "black", backgroundColor: "dark-grey"}}>
        {/*Passes in the screen to MainContent.js */}
        <MainContent screen = {screen}/>
      </div>
      {/*Passes in the function to change the screen to NavButtons.js */}
      <NavButtons setScreen = {setScreen} />
    </Container>
  );
}

export default App;
