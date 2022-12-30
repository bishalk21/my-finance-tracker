import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogoutAction } from '../pages/users/userAction';
export const Header = () => {
  // console.log(isLoggedin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state)=> state.user);

  const handleOnLogout = () => {
    // sessionStorage.removeItem("user");
    dispatch(userLogoutAction())
    navigate("/"); 
  }

  return (
    <>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
        Welcome {user.firstName}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {
            user._id ? (
<Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
            ) : (
              <>
              <Link to="/login" className='nav-link'>Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
              </>
)
          }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
