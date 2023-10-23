import React, { useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


function MyNavbar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      window.location.replace("/");
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg p-2" className='shadow'>
        <Navbar.Brand as={Link} to="/home">
          <img src='/logo.png' width={200} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto p-2 gap-2">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home/appointments">Reservation</Nav.Link>
            <Nav.Link as={Link} to="/home/confirm">Confirm Reservation</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={handleLogout} className='bg-danger p-2 rounded' style={{width: 'fit-content'}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
