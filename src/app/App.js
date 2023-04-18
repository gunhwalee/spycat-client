import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CreateServerPage from "../pages/CreateServerPage";
import EntryPage from "../pages/EntryPage";
import TrafficChartPage from "../pages/TrafficChartPage";
import ErrorChartPage from "../pages/ErrorChartPage";
import UserPage from "../pages/UserPage";
import ErrorListPage from "../pages/ErrorListPage";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route
          path="/login"
          element={<GuestRoute component={<LoginPage />} />}
          exact
        />
        <Route
          path="/signup"
          element={<GuestRoute component={<SignupPage />} />}
          exact
        />
        <Route
          path="/createserver"
          element={<PrivateRoute component={<CreateServerPage />} />}
          exact
        />
        <Route
          path="/:id/traffics"
          element={<PrivateRoute component={<TrafficChartPage />} />}
          exact
        />
        <Route
          path="/:id/errors"
          element={<PrivateRoute component={<ErrorChartPage />} />}
          exact
        />
        <Route
          path="/users"
          element={<PrivateRoute component={<UserPage />} />}
        />
        <Route
          path="/:id/errorlists"
          element={<PrivateRoute component={<ErrorListPage />} />}
          exact
        />
        <Route path="/entry" element={<EntryPage />} exact />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
