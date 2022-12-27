
import './App.css';
import { DashBoard } from './pages/DashBoard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
    {/* <MainLayout>
    <Login />
      <Register />
      <DashBoard />
    </MainLayout> */}
    </div>
  );
}

export default App;
