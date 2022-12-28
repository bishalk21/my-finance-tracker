import React from 'react'
import { Table } from 'react-bootstrap'

export const TransactionTable = ({transaction}) => {
  const total = transaction.reduce((acc, {type, amount}) =>{
return type === "income" ? acc + amount : acc - amount
},0);
  return (
    <>
           <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Expense</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
      {
        transaction.length > 0 && transaction.map((item, i) => {
         return <tr key={i}>
          <td>{i+1}</td>
          <td>{new Date(item.createdAt).toLocaleDateString()}</td>
          <td>{item.title}</td>
          <td className='text-danger'>{item.type === "expense" &&  "-" +  item.amount}</td>
          <td className='text-success'>{item.type === "income" && item.amount}</td>
        </tr>
        })
      }

      </tbody>
    </Table>
    <div className="text-end fw-bold">
      Balance: ${total}
    </div>
    </>
  )
}
