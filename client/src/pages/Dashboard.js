import React, { useEffect, useState } from "react";
import { MainLayout } from "../Components/Layout/MainLayout";
import Row from "react-bootstrap/Row";
import { TransactionForm } from "../Components/Form/TransactionForm";
import { TransactionTable } from "../Components/transaction-table/TransactionTable";
import Container from "react-bootstrap/esm/Container";
import {
  deleteTransaction,
  getTransactions,
  postTransaction,
} from "../helpers/axiosHelper";
import { toast } from "react-toastify";

const Dashboard = ({ isLoggedIn }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { status, message, trans } = await getTransactions();
    // console.log(status);
    // status === "success" && trans.length && setTransactions(trans);
    // console.log(data);
    status === "success" && setTransactions(trans);
  };
  // console.log(transactions);

  const postData = async (form) => {
    const user = JSON.parse(sessionStorage.getItem("user")); // get the user from the session storage
    // console.log(user);
    const userId = user._id;
    const { status, message } = await postTransaction({ ...form, userId });
    toast[status](message);
    status === "success" && fetchData(); //fetech the data
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }
    const { status, message } = await deleteTransaction(_id);
    // console.log(status, message);
    toast[status](message);
    status === "success" && fetchData();
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <Container>
        <Row>
          <h3 className="mt-3 mb-4">Dashboard</h3>
          {/* form */}
          <TransactionForm postData={postData} />
          <hr className="mt-5" />
          {/*  */}
          <TransactionTable
            transactions={transactions}
            handleOnDelete={handleOnDelete}
          />
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
