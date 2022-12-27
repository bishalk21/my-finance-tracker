import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'

export const Register = () => {
  return (
    <MainLayout> <div className='form-page d-flex justify-content-center mt-5'>
    <div className="formpage border shadow-lg p-4">
    <h3>Register New User</h3>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>First Name</Form.Label>
         <Form.Control type="email" placeholder="Enter your first name" />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Last Name</Form.Label>
         <Form.Control type="email" placeholder="Enter your last name" />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control type="password" placeholder="Confirm Password" />
       </Form.Group>
 
       <Button variant="primary" type="submit"S>
         Sign Up
       </Button>
     </Form>
 
     <div className="text-end">
         <Link to="/login">Already have an account?</Link>
     </div>
    </div>
     </div></MainLayout>
   
  )
}
