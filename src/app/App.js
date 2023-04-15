import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CreateServerPage from "../pages/CreateServerPage";
import EntryPage from "../pages/EntryPage";
import TrafficPage from "../pages/TrafficPage";
import ErrorPage from "../pages/ErrorPage";
import UserPage from "../pages/UserPage";
import ErrorListPage from "../pages/ErrorListPage";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/createserver" element={<CreateServerPage />} exact />
        <Route path="/entry" element={<EntryPage />} exact />
        <Route path="/:id/traffics" element={<TrafficPage />} exact />
        <Route path="/:id/errors" element={<ErrorPage />} exact />
        <Route path="/users" element={<UserPage />} />
        <Route path="/:id/errorlists" element={<ErrorListPage />} exact />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
