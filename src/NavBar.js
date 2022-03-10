import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
//https://react-bootstrap.github.io/getting-started/introduction/


function NavBar(){
    return(
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
    
    );
}

export default NavBar;