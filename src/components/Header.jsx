import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import log from '../assets/logo.png';
import '../styles/App.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex">
        <Nav.Link className="pr-2">
          <img src={log} width="100px" alt="logo" />
        </Nav.Link>
        <Navbar.Brand className="justify-self-start" href="#home">
          Space Traveler&apos;s Hub
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1  mt-4 mr-4 p-3">
          <Nav.Link href="#home">Rockets</Nav.Link>
          <NavLink
            to="/Missions"
            // className="nav-link"
          >
            Missions
          </NavLink>
          <NavLink
            to="/Profile"
            // className="nav-link"
          >
            My Profile
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
