import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css';

function NavBar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">What Weather</Navbar.Brand>
                    <Nav className="me-auto-edited">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="favorites">Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;