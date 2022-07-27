import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ isLoggedIn }) => {
  // console.log(isLoggedIn);
  const navigate = useNavigate();

  const handleOnLogOut = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="/">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Nav.Link onClick={handleOnLogOut}>Log Out</Nav.Link>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
