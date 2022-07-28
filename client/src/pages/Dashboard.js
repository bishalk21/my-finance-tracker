import { MainLayout } from "../Components/Layout/MainLayout";
import Row from "react-bootstrap/Row";
import { TransactionForm } from "../Components/Form/TransactionForm";
import { TransactionTable } from "../Components/transaction-table/TransactionTable";
import Container from "react-bootstrap/esm/Container";

const Dashboard = ({ isLoggedIn }) => {
  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <Container>
        <Row>
          <h3 className="mt-3 mb-4">Dashboard</h3>
          {/* form */}
          <TransactionForm />
          <hr className="mt-5" />
          {/*  */}
          <TransactionTable />
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
