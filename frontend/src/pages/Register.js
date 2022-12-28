import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { postNewUser } from '../helpers/axiosHelper'
import {  toast } from 'react-toastify';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export const Register = () => {

    const [form, setForm] = useState(initialState);
    // storing response
    const [resp, setResp] = useState({});

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // console.log(form);

        // not sending confirm password using dedstructuring and rest operator
        const {confirmPassword, ...rest} = form;
        if (confirmPassword !== rest.password) {
            return alert("Password and confirm password must be same");
        }
        const {status, message} = await postNewUser(rest);
        setResp({status, message});

        // using toast
        // toast[status] is toast["success"] or toast["error"]
        // toast[status](message) is toast["success"](message) or toast["error"](message)
        toast[status](message);

        // IN ORDER TO MAKE THE FORM CLEAR OR ALL PROPERTIES CLEAR ON BUTTON CLICK 
        // WE NEED TO USE THE SETFORM FUNCTION AND PASS AN EMPTY OBJECT
        // setForm({});

        // IN ORDER TO MAKE THE FORM CLEAR OR ALL PROPERTIES CLEAR ON BUTTON CLICK
        // WE NEED TO USE THE SETFORM FUNCTION AND PASS THE INITIAL STATE
        status === "success" && setForm(initialState);
    }

  return (
    <MainLayout> <div className='form-page d-flex justify-content-center mt-5'>
    <div className="formpage border shadow-lg p-4">
    <h3>Register New User</h3>
         <Form onSubmit={handleOnSubmit}>
{resp.message &&          <Alert variant={resp.status === "success" ? "success" : "danger"} className="mt-3">{resp.message}</Alert>
}
         <Form.Group className="mb-3" >
         <Form.Label>First Name</Form.Label>
         <Form.Control name="firstName" type="text" placeholder="Enter your first name" value={form.firstName} onChange={handleOnChange} />
       </Form.Group>
 
       <Form.Group className="mb-3" >
         <Form.Label>Last Name</Form.Label>
         <Form.Control name="lastName" type="text" placeholder="Enter your last name" value={form.lastName} onChange={handleOnChange} />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleOnChange} />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control name="password" type="password" placeholder="Password" value={form.password}  onChange={handleOnChange} />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleOnChange} />
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
