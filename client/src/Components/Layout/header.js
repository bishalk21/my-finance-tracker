import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../pages/userState/userAction";

export const Header = ({ isLoggedIn }) => {
  // console.log(isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleOnLogOut = () => {
    // sessionStorage.removeItem("user");
    dispatch(logoutAction());
    navigate("/");
  };
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="/"> Finance Tracker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user._id ? (
              <Nav.Link onClick={handleOnLogOut}> Log Out </Nav.Link>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login{" "}
                </Link>{" "}
                <Link to="/register" className="nav-link">
                  Register{" "}
                </Link>{" "}
              </>
            )}{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
