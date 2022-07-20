import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../Components/Layout/MainLayout";

const Register = () => {
  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-1">
        <div className="login-form border shadow-lg bg-light p-5">
          <h3>Register As New User</h3>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                required
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
