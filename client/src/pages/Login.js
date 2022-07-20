import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MainLayout } from "../Components/Layout/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-1">
        <div className="login-form border shadow-lg bg-light p-5">
          <h3>Welcome Back</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" value="Login">
              Login
            </Button>
          </Form>
          <div className="text-end">
            New User? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
