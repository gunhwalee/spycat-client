import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Lobby from "../components/Lobby";
import Auth from "../utils/Auth";

function App() {
  const AuthMain = Auth(Main, null);
  const AuthLogin = Auth(Login, false);
  const AuthSignup = Auth(Signup, false);
  const AuthLobby = Auth(Lobby, true);

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={AuthLogin} />
        <Route path="/signup" element={AuthSignup} />
        <Route path="/:id" element={AuthLobby} />
        <Route path="/" element={AuthMain} />
      </Routes>
    </>
  );
}

export default App;
