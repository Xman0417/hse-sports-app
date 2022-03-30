import React from "react";

import Nav from 'react-bootstrap/Nav';
import scoreboardLogo  from './icons/scoreboard.svg';
import newsLogo  from './icons/news.svg';
import playLogo  from './icons/playButton.svg';
import Button from 'react-bootstrap/Button';
//https://react-bootstrap.github.io/getting-started/introduction/

//Image link is temp for testing -- add new logo nav
function NavButtons(){
    /* temp comment return(
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                    <Nav.Link href="https://www.hsenews.com/live-stream/">Watch Now</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
        <img src= {scoreboardLogo} alt="scoreboard image" style = {{width: "250px"}}/>
        </>
    );*/

    const handleLiveClick = () => {
        window.open("https://www.hsenews.com/live-stream/");
    };
    return(
        <div>
            <Nav className="justify-content-center">
                
                <Nav.Item><Button variant="outline-primary"><img src= {newsLogo} alt="news" style = {{width: "50px"}}/></Button></Nav.Item>
                <Nav.Item><Button variant="outline-primary"><img src= {scoreboardLogo} alt="scores" style = {{width: "50px"}}/></Button></Nav.Item>
                <Nav.Item><Button variant="outline-primary" onClick={handleLiveClick}><img src= {playLogo} alt="livestream" style = {{width: "50px"}}/></Button></Nav.Item>
            </Nav>
        </div>
    );
}

export default NavButtons;