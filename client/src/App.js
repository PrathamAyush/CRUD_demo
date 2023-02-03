import './App.css';
import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Snav from './component/Snav';
import Student from './pages/Student';
import Manage from './pages/Manage';
import Login from './pages/Login';

function App() {
  return (
    <div className="container bg-light mt-2">
    <BrowserRouter>
    <Snav/>
    <Routes>
      <Route path='/' element={<Student/>} />
      <Route path='/manage' element={<Manage/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
