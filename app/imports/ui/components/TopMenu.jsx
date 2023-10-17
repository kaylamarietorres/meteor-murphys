import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container id="topMenu" fluid className="py-3">
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src="../images/murphyslogowhite.png" width={200} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">St. Patrick&apos;s Day</Nav.Link>
            <Nav.Link href="#">To Go Ordering</Nav.Link>
            <Nav.Link href="#"><Instagram /></Nav.Link>
            <Nav.Link href="#"><Facebook /></Nav.Link>
            <Nav.Link href="#"><Twitter /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);
export default TopMenu;
