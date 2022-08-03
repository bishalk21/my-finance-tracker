import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postDataAction } from "../../pages/transaction/transAction";

export const TransactionForm = ({ postData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target; // name is the key of the object
    setForm({
      ...form,
      [name]: value,
    }); // destructuring the object to get the key and value
    // console.log(setForm);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // prevents the page from refreshing
    // console.log(form);
    dispatch(postDataAction(form));
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3 className=""> Transaction Form </h3>{" "}
      <Row className="g-2">
        <Col md="2">
          <Form.Select
            defaultValue=""
            name="type"
            onChange={handleOnChange}
            required
          >
            <option value=""> Choose... </option>{" "}
            <option value="income"> Income </option>{" "}
            <option value="expense"> Expenses </option>{" "}
          </Form.Select>{" "}
        </Col>{" "}
        <Col md="2">
          <Form.Control type="date" name="date" onChange={handleOnChange} />{" "}
        </Col>{" "}
        <Col md="3">
          <Form.Control
            name="title"
            placeholder="transaction"
            onChange={handleOnChange}
            required
          />
        </Col>{" "}
        <Col md="2">
          <Form.Control
            placeholder="100"
            name="amount"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="Submit"
            value="Submit"
            className="btn btn-primary"
          />
        </Col>{" "}
      </Row>{" "}
    </Form>
  );
};
