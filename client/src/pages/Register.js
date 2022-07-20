import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../Components/Layout/MainLayout";
import { useState } from "react";

let initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [user, setUser] = useState({}); // setUser

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser(initialState);
  };

  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-1">
        <div className="login-form border shadow-lg bg-light p-5">
          <h3>Register As New User</h3>

          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                name="firstName"
                type="firstName "
                placeholder="Enter first name"
                required
                onChange={handleOnChange}
                value={user.firstName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Enter last name"
                required
                onChange={handleOnChange}
                value={user.lastName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
                onChange={handleOnChange}
                value={user.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={handleOnChange}
                value={user.password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                required
                onChange={handleOnChange}
                value={user.confirmPassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit" value="Register">
              Register
            </Button>
          </Form>

          <div className="text-end">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
