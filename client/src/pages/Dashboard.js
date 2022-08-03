import { MainLayout } from "../Components/Layout/MainLayout";
import Row from "react-bootstrap/Row";
import { TransactionForm } from "../Components/Form/TransactionForm";
import { TransactionTable } from "../Components/transaction-table/TransactionTable";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    !user._id && navigate("/");
  }, [user]);
  return (
    <MainLayout>
      <Container>
        <Row>
          <h3 className="mt-3 mb-4"> Dashboard </h3> {/* form */}{" "}
          <TransactionForm />
          <hr className="mt-5" /> {/*  */} <TransactionTable />
        </Row>{" "}
      </Container>{" "}
    </MainLayout>
  );
};

export default Dashboard;
