import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CreateServerPage from "../pages/CreateServerPage";
import EntryPage from "../pages/EntryPage";
import TrafficCharts from "../components/TrafficCharts";
import TestPage from "../pages/TestPage";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/test" element={<TestPage />} />
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
