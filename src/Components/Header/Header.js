import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
import { Container, Nav, Navbar} from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar className='main-menu' collapseOnSelect expand="lg" bg="info" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home"><h2>car warehouse</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link   as={Link} to="blog"><span className='nav-item'>blog</span></Nav.Link>
      <Nav.Link href="#pricing"><span className='nav-item'>inventory</span></Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login"><span className='nav-item'>login</span></Nav.Link>
      <Nav.Link as={Link} to="/signup"><span className='nav-item'>signup</span>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;