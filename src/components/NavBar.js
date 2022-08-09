import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Gnosia Cerrado</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar
