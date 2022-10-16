import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="light">
            <Container>
            <Navbar.Brand style={{color: 'white'}} href="/">
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/publications">Publications</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar
