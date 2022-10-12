import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Banco de Extratos do Cerrado</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar
