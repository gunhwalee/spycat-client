import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ServerName from "./ServerName";
import { COLORS } from "../assets/constants";
import { ReactComponent as Logout } from "../assets/img/logout.svg";
import { deleteUser } from "../features/userSlice";
import logo from "../assets/img/logo-white.png";

const Aside = styled.aside`
  width: 200px;
  height: 100%;
  padding: 15px;
  background-color: ${COLORS.BACKGROUND};
  color: ${COLORS.FONT};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    font-size: 16px;
    color: ${COLORS.FONT};
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .logo {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }

  h1 {
    font-size: 20px;
    font-weight: 400;
  }

  .name {
    padding-bottom: 20px;
  }

  .title {
    margin-left: 5px;
  }

  > .logout {
    display: flex;
    align-items: center;
  }
`;

function Sidebar() {
  const { name, apikey, usingHook } = useSelector(state => state.user);
  const [serverArray, setServerArray] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let serverList;

  useEffect(() => {
    const loadServerList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/serverlists`,
          { withCredentials: true },
        );

        setServerArray(response.data.serverList);
      } catch (err) {
        console.error(err);
      }
    };

    if (name) {
      loadServerList();
    }
  }, [name, usingHook]);

  if (serverArray && serverArray.length) {
    serverList = serverArray.map(element => {
      return (
        <ServerName
          name={element.serverName}
          id={element.url}
          key={element._id}
        />
      );
    });
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/logout`,
        null,
        { withCredentials: true },
      );

      if (response.data.result === "ok") {
        setServerArray(null);
        dispatch(deleteUser());
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Aside>
      <nav className="list-wrapper">
        <Link to="/entry">
          <div className="logo">
            <img alt="logo" src={logo} width="20px" height="20px" />
            <h1 className="title">Spy Cat</h1>
          </div>
        </Link>
        {name && (
          <ol>
            <Link to="/users">
              <h1 className="name">{name}님</h1>
            </Link>
            {serverList}
            <button type="button" onClick={() => navigate("/createserver")}>
              + 서버 추가
            </button>
          </ol>
        )}
      </nav>
      <footer className="logout">
        {name && (
          <>
            <Logout width="15px" height="15px" />
            <button type="button" onClick={handleLogout}>
              로그 아웃
            </button>
          </>
        )}
      </footer>
    </Aside>
  );
}

export default Sidebar;
