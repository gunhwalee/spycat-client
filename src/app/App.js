import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CreateServerPage from "../pages/CreateServerPage";
import EntryPage from "../pages/EntryPage";
import TrafficPage from "../pages/TrafficPage";
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
        <Route path="/entry" element={<EntryPage />} exact />
        <Route path="/:id/traffics" element={<TrafficPage />} exact />
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
