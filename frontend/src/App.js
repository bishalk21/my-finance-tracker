
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { DashBoard } from './pages/DashBoard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

function App() {
  // const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login   />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard  />} />
      </Routes>
    </BrowserRouter>

    <ToastContainer />
    {/* <MainLayout>
    <Login />
      <Register />
      <DashBoard />
    </MainLayout> */}
    </div>
  );
}

export default App;
