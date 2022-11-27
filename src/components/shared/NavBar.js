import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="light">
            <Container>
            <Navbar.Brand style={{color: 'white'}} as={Link} to="/">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
                Cerrado Database
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/search">Search</Nav.Link>
                <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar
