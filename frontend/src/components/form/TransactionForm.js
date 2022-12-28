import React, { useState } from 'react'
import {  Col, Form, Row } from 'react-bootstrap'

export const TransactionForm = ({postData}) => {
    const [form, setForm ] = useState({})

    const handleOnChange =(e) => {
        const {name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleOnSubmit = async  (e) => {
        e.preventDefault();
        // console.log(form);ode1
        postData(form);
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
        <Col md="2">
          <Form.Control required onChange={handleOnChange} name="date" type="date" />
        </Col>
        <Col md="4">
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
