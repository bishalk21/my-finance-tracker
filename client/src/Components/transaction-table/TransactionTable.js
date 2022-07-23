import Table from "react-bootstrap/Table";

export const TransactionTable = () => {
  return (
    <>
      <Table striped bordered hover variant>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>20-2-22</td>
            <td>Laptop</td>
            <td className="text-danger text-center">-200</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>20-2-22</td>
            <td>Laptop</td>
            <td></td>
            <td className="text-success">2000</td>
          </tr>
        </tbody>
      </Table>
      <div className="text-end fw-bold">Balance: $20</div>
    </>
  );
};
