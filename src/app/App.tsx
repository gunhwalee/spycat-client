import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CreateServerPage from "../pages/CreateServerPage";
import ExampleChartPage from "../pages/ExampleChartPage";
import ExampleListPage from "../pages/ExampleListPage";
import TrafficChartPage from "../pages/TrafficChartPage";
import ErrorChartPage from "../pages/ErrorChartPage";
import UserPage from "../pages/UserPage";
import ErrorListPage from "../pages/ErrorListPage";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import MobilePage from "../pages/MobilePage";

function App() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = () => {
    return windowSize < 1080;
  };

  return (
    <>
      {isMobile() ? (
        <MobilePage />
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route
              path="/example/errorlists"
              element={<ExampleListPage />}
            />
            <Route path="/example" element={<ExampleChartPage />} >
              <Route path=":type" element={<ExampleChartPage />}  />
            </Route>
            <Route
              path="/login"
              element={<GuestRoute component={<LoginPage />} />}
            />
            <Route
              path="/signup"
              element={<GuestRoute component={<SignupPage />} />}
            />
            <Route
              path="/createserver"
              element={<PrivateRoute component={<CreateServerPage />} />}
            />
            <Route
              path="/:apikey/traffics"
              element={<PrivateRoute component={<TrafficChartPage />} />}
            />
            <Route
              path="/:apikey/errors"
              element={<PrivateRoute component={<ErrorChartPage />} />}
            />
            <Route
              path="/users"
              element={<PrivateRoute component={<UserPage />} />}
            />
            <Route
              path="/:apikey/errorlists"
              element={<PrivateRoute component={<ErrorListPage />} />}
            />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
