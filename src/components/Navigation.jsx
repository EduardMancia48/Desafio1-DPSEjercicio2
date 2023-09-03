import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"> {/* Cambia bg="light" a bg="dark" y agrega variant="dark" */}
      <Navbar.Brand href="#home">
        <span className="navbar-title">Pizzería Italiana</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Puedes agregar aquí elementos de navegación si es necesario */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
