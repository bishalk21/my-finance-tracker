import React from 'react'
import { Row } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { toast } from 'react-toastify'
import { TransactionForm } from '../components/form/TransactionForm'
import { MainLayout } from '../components/MainLayout'
import { TransactionTable } from '../components/transaction-table/TransactionTable'
// import { deleteTransaction, getTransaction } from '../helpers/axiosHelper'
// import { fetchDataAction } from './transaction/transAction'


export const DashBoard = ({isLoggedin}) => {

  // Using redux
  // const dispatch = useDispatch();
  // berfore redux
  // const [transaction, setTransactions] = useState([])

  // ========= use of redux, can call function from child component =========
  // useEffect(() => {
  //   // before redux
  //   // fetchData()

  //   // Using redux
  //   dispatch(fetchDataAction())
  // },[])

  // ********* Before using redux *******
  // const fetchData = async () =>{
  //   const {status, message, trans} = await getTransaction()
  //   // setTransactions(data)

  //   // status === "success" && trans.length && setTransactions(trans)
  //   status === "success" && setTransactions(trans)
  // }

  // triger the fetchData function when the page reload
    // useEffect is the hook that allows to run additional code after component have been completely rerender. 
// console.log(transaction)

// const postData = async (form) => {
//           // getting user id from sessionstorage
//         // JSON.parse to convert string to objext
//         const user = JSON.parse(sessionStorage.getItem("user"));
//       const userId = user._id;

//         const {status, message} = await postNewTransaction({...form, userId});
//         toast[status](message);
//         status === "success" && fetchData()
// }

// delete button
// const handleOnDelete = async (_id) => {

//   if (!window.confirm("Are you sure you want to delete this transaction?")){
//     return; 
//   }

//     const {status, message} = await deleteTransaction(_id);
//     toast[status](message);
//     status === "success" && fetchData()
// }
// no props drill down

  return (
   <MainLayout isLoggedin={isLoggedin}>
   <Row>
    <h3 className="mt-3">DashBoard</h3>
    <hr />

{/* form */}
<TransactionForm />

{/* transaction */}
<TransactionTable   />
</Row>
   </MainLayout>
  )
}
