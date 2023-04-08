import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Serverlist from "./Serverlist";
import { COLORS, SIZE } from "../assets/constants";
import { ReactComponent as Logout } from "../assets/img/logout.svg";

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
  const name = useSelector(state => state.user.name);

  return (
    <Aside>
      <div className="list-wrapper">
        <h1>Spy Cat</h1>
        {name && (
          <>
            <h1 className="name">홍길동 님</h1>
            <Serverlist name="Reactree" />
            <Serverlist name="Spy Cat" />
            <button type="button">+ 서버 추가</button>
          </>
        )}
      </div>
      <div className="logout">
        {name && (
          <>
            <Logout width="15px" height="15px" />
            <button type="button">로그 아웃</button>
          </>
        )}
      </div>
    </Aside>
  );
}

export default Sidebar;
