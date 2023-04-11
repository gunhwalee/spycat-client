import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Login from "../components/Login";
import Signup from "../components/Signup";
import MyPage from "../components/MyPage";
import CreateServer from "../components/CreateServer";
import Chart from "../components/Chart";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/:id" element={<MyPage />} exact />
        <Route path="/createserver" element={<CreateServer />} exact />
        <Route path="/:id/traffics" element={<Chart />} exact />
        <Route path="/" element={<Main />} exact />
      </Routes>
    </>
  );
}

export default App;
