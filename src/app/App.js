import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";
import CreateServerPage from "../components/CreateServerPage";
import EntryPage from "../components/EntryPage";
import TrafficCharts from "../components/TrafficCharts";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/createserver" element={<CreateServerPage />} exact />
        <Route path="/users" element={<EntryPage />} exact />
        <Route path="/:id/traffics" element={<TrafficCharts />} exact />
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </>
  );
}

export default App;
