import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">PortFolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Main"></Nav.Link>
            <Nav.Link href="Project">Project</Nav.Link>
            <Nav.Link href="Profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
