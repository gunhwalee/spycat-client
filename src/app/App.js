import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Lobby from "../components/Lobby";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:id" element={<Lobby />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
