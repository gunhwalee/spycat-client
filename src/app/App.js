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

function App() {
  const isMobile = () => {
    const user = navigator.userAgent;
    let isCheck = false;

    if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
      isCheck = true;
    }

    return isCheck;
  };
  const result = isMobile();

  return (
    <>
      {result ? (
        <h1>
          모바일기기는 지원하지 않습니다.
          <br />웹 브라우저로 접속해주세요.
        </h1>
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route
              path="/example/errorlists"
              element={<ExampleListPage />}
              exact
            />
            <Route path="/example" element={<ExampleChartPage />} exact>
              <Route path=":type" element={<ExampleChartPage />} exact />
            </Route>
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
              path="/:apikey/traffics"
              element={<PrivateRoute component={<TrafficChartPage />} />}
              exact
            />
            <Route
              path="/:apikey/errors"
              element={<PrivateRoute component={<ErrorChartPage />} />}
              exact
            />
            <Route
              path="/users"
              element={<PrivateRoute component={<UserPage />} />}
            />
            <Route
              path="/:apikey/errorlists"
              element={<PrivateRoute component={<ErrorListPage />} />}
              exact
            />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
