import Table from "react-bootstrap/Table";

export const TransactionTable = ({ transactions, handleOnDelete }) => {
  // console.log(transactions);
  const total = transactions.reduce((acc, { type, amount }) => {
    return type === "income" ? acc + amount : acc - amount;
  }, 0);

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
          {transactions.length > 0 &&
            transactions.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {/* <td>{new Date(item.createdAt).toLocaleDateString() }</td> */}
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{item.title}</td>
                <td className="text-danger text-center">
                  {item.type === "expense" && "-" + item.amount}
                </td>
                <td className="text-success text-center">
                  {item.type === "income" && +item.amount}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleOnDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="text-end fw-bold">Balance: $ {total}</div>
    </>
  );
};
