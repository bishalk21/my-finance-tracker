import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MainLayout } from "../Components/Layout/MainLayout";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./userState/userAction";

const Login = () => {
  const emailRef = useRef(); // create a reference to the email input
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user]); // object in array means it will run only once when the component is mounted

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    dispatch(loginAction({ email, password }));
    // console.log(user);
  };

  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-1">
        <div className="login-form border shadow-lg bg-light p-5">
          <h3> Welcome Back </h3>{" "}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Email address </Form.Label>{" "}
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Password </Form.Label>{" "}
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" value="Login">
              Login{" "}
            </Button>{" "}
          </Form>{" "}
          <div className="text-end">
            New User ? <Link to="/register"> Register </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </MainLayout>
  );
};

export default Login;
