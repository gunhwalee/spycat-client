import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Login from "../components/Login";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
