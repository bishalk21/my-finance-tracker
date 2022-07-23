import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export const TransactionForm = () => {
  return (
    <Form>
      <h3 className="">Transaction Form</h3>
      <Row className="g-2">
        <Col md="2">
          <Form.Select defaultValue="">
            <option value="">Choose...</option>
            <option value="">Income</option>
            <option value="">Expenses</option>
          </Form.Select>
        </Col>
        <Col md="5">
          <Form.Control placeholder="transaction" />
        </Col>
        <Col md="2">
          <Form.Control placeholder="100" />
        </Col>

        <Col md="2">
          <Form.Control
            type="Submit"
            value="Submit"
            className="btn btn-primary"
          />
        </Col>
      </Row>
    </Form>
  );
};
