import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Serverlist from "./Serverlist";
import { COLORS, SIZE } from "../assets/constants";
import { ReactComponent as Logout } from "../assets/img/logout.svg";
import { deleteUser } from "../features/userSlice";

const Aside = styled.aside`
  width: 200px;
  height: 100%;
  padding: ${SIZE.PADDING}px;
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

  & h1 {
    font-size: 18px;
    padding-bottom: ${SIZE.PADDING}px;
  }

  > .logout {
    display: flex;
  }
`;

function Sidebar() {
  const { name, id } = useSelector(state => state.user);
  const [serverArray, setServerArray] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let serverList;

  useEffect(() => {
    const loadServerList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${id}/serverlists`,
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
  }, [name, serverArray]);

  if (serverArray && serverArray.length) {
    serverList = serverArray.map(element => {
      return (
        <Serverlist
          name={element.serverName}
          key={element.url}
          id={element._id}
        />
      );
    });
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPYCAT_SERVER}/users/${id}/logout`,
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
      <div className="list-wrapper">
        <h1>Spy Cat</h1>
        {name && (
          <>
            <h1 className="name">{name}님</h1>
            {serverList}
            <button type="button" onClick={() => navigate("/createserver")}>
              + 서버 추가
            </button>
          </>
        )}
      </div>
      <div className="logout">
        {name && (
          <>
            <Logout width="15px" height="15px" />
            <button type="button" onClick={handleLogout}>
              로그 아웃
            </button>
          </>
        )}
      </div>
    </Aside>
  );
}

export default Sidebar;
