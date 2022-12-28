import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { TransactionForm } from '../components/form/TransactionForm'
import { MainLayout } from '../components/MainLayout'
import { TransactionTable } from '../components/transaction-table/TransactionTable'
import { getTransaction } from '../helpers/axiosHelper'


export const DashBoard = () => {

  const [transaction, setTransactions] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () =>{
    const {status, message, trans} = await getTransaction()
    // setTransactions(data)

    status === "success" && trans.length && setTransactions(trans)
  }

  // triger the fetchData function when the page reload
    // useEffect is the hook that allows to run additional code after component have been completely rerender. 
// console.log(transaction)



  return (
   <MainLayout>
   <Row>
    <h3 className="mt-3">DashBoard</h3>
    <hr />

{/* form */}
<TransactionForm/>

{/* transaction */}
<TransactionTable transaction={transaction} />
</Row>
   </MainLayout>
  )
}
