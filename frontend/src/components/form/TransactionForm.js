import React, { useState } from 'react'
import {  Col, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { postNewTransaction } from '../../helpers/axiosHelper'

export const TransactionForm = () => {
    const [form, setForm ] = useState({})

    const handleOnChange =(e) => {
        const {name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        // getting user id from sessionstorage
        // JSON.parse to convert string to objext
        const user = JSON.parse(sessionStorage.getItem("user"));
      const userId = user._id;

        const {status, message} = await postNewTransaction({...form, userId});
        toast[status](message);

    }

  return (
    <>
         <Form onSubmit={handleOnSubmit}>
      <Row className="g-2">
      <Col md="2">
      <Form.Select required onChange={handleOnChange}  aria-label="Default select example" defaultValue="" name="type">
      <option value="">Choose...</option>
      <option value="income">income</option>
      <option value="expense">expenses</option>
    </Form.Select>
      </Col>
        <Col md="5">
          <Form.Control required onChange={handleOnChange} placeholder="Transaction name" name="title" />
        </Col>
        <Col md="2">
          <Form.Control required onChange={handleOnChange}  placeholder="100" name="amount" type="number" />
        </Col>
        <Col md="2">
        <Form.Control type="submit" className="btn btn-primary"/>
        </Col>
      </Row>
    </Form>
    </>
  )
}
