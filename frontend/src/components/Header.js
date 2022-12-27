import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/login" className='nav-link'>Login</Link>
            <Link to="/register" className="nav-link">Register</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
