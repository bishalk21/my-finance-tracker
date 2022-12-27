import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'


export const Login = () => {

    // onControlled input field
    

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }

  return (
    <MainLayout>
    <div className='form-page d-flex justify-content-center mt-5'>
   <div className="formpage border shadow-lg p-4">
   <h3>Welcome Back</h3>
        <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Login
      </Button>
    </Form>

    <div className="text-end">
        <Link to="/register">Don't have an account?</Link>
    </div>
   </div>
    </div>
    </MainLayout>
  )
}
