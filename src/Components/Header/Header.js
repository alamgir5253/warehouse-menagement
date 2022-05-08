import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
const Header = () => {
  const [user,loading] = useAuthState(auth);

  const handleSignOut= () =>{
    signOut(auth)
  }
  return (
    <Navbar className='main-menu' collapseOnSelect expand="lg" bg="info" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home"><h2>Dream Auto Warehouse</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link   as={Link} to="blog"><span className='nav-item'>blog</span></Nav.Link>
      {
        user && <>
        <Nav.Link as={Link} to="ManageInventories"><span className='nav-item'>ManageInventories</span></Nav.Link>
        <Nav.Link as={Link} to="additem"><span className='nav-item'>additem</span></Nav.Link>
        <Nav.Link as={Link} to="useritem"><span className='nav-item'>user item</span></Nav.Link>
        </>
      }
     
    </Nav>
    <Nav>
      {user ? <Nav.Link onClick={handleSignOut}><span className='nav-item'>logout</span></Nav.Link>  :<Nav.Link as={Link} to="/login"><span className='nav-item'>login</span></Nav.Link>}
      <Nav.Link as={Link} to="/signup"><span className='nav-item'>signup</span>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;