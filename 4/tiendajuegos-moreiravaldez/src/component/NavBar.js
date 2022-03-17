import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  
  return (
  <Navbar bg="light" expand="sm">
    <Container>
      <Navbar.Brand href="#home">Tienda de Juegos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Ofertas</Nav.Link>
          <NavDropdown title="Plataformas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">PS5</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">XBOX</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Switch</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

};

export default NavBar;