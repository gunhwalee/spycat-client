import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ServerName from "./ServerName";
import { COLORS, SIZE } from "../assets/constants";
import { ReactComponent as Logout } from "../assets/img/logout.svg";
import { deleteUser, setServers } from "../features/userSlice";
import logo from "../assets/img/logo-white.png";

const Aside = styled.aside`
  width: ${SIZE.SIDEBAR}px;
  height: 100%;
  padding: ${SIZE.PADDING}px;
  background-color: ${COLORS.SIDEBAR};
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    font-size: ${SIZE.FONT_SMALL}px;
    color: ${COLORS.WHITE};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .list {
    display: flex;
    align-items: center;
    padding-bottom: ${SIZE.PADDING * 2}px;
  }

  h1 {
    font-size: ${SIZE.FONT_BUTTON}px;
    font-weight: 400;
  }

  .title {
    margin-left: ${SIZE.MARGIN / 2}px;
  }

  > .logout {
    display: flex;
    align-items: center;
  }
`;

function Sidebar() {
  const { name, apikey, servers } = useSelector(state => state.user);
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

        dispatch(setServers({ servers: response.data.servers }));
      } catch (err) {
        console.error(err);
      }
    };

    if (name) {
      loadServerList();
    }
  }, [name]);

  if (servers && servers.length) {
    serverList = servers.map(element => {
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
          <div className="list">
            <img
              alt="logo"
              src={logo}
              width={SIZE.FONT_BUTTON}
              height={SIZE.FONT_BUTTON}
            />
            <h1 className="title">Spy Cat</h1>
          </div>
        </Link>
        {name && (
          <ol>
            <Link to="/users">
              <h1 className="list">{name}님</h1>
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
            <Logout width={SIZE.FONT_SMALL} height={SIZE.FONT_SMALL} />
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
