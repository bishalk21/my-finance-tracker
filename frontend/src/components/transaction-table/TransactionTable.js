import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction, handleOnDeleteAction } from '../../pages/transaction/transAction';

export const TransactionTable = () => {
  // Using redux
  const dispatch = useDispatch();
  const {transactions} = useSelector((state) => state.transactions)

  useEffect(() => {
    // before redux
    // fetchData()

    // Using redux
    dispatch(fetchDataAction())
  },[dispatch])




  const total = transactions.reduce((acc, {type, amount}) =>{
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        transactions.length > 0 && transactions.map((item, i) => {
         return <tr key={i}>
          <td>{i+1}</td>
          {/* <td>{new Date(item.createdAt).toLocaleDateString()}</td> */}
          <td>{new Date(item.date).toLocaleDateString()}</td>
          <td>{item.title}</td>
          <td className='text-danger'>{item.type === "expense" &&  "-" +  item.amount}</td>
          <td className='text-success'>{item.type === "income" && item.amount}</td>
          <td>
          <Button variant="danger" onClick={() => dispatch(handleOnDeleteAction(item._id))}>Delete</Button>
          </td>
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
