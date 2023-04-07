import React from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../assets/constants";

import Serverlist from "./Serverlist";
import { ReactComponent as Logout } from "../assets/img/logout.svg";

const Nav = styled.nav`
  width: 200px;
  height: 100%;
  padding: ${SIZE.PADDING}px;
  background-color: ${COLORS.BACKGROUND};
  color: ${COLORS.FONT};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    color: ${COLORS.FONT};
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  & h1 {
    padding-bottom: ${SIZE.PADDING}px;
  }

  > .logout {
    display: flex;
  }
`;

function Sidebar() {
  return (
    <Nav>
      <div className="list-wrapper">
        <h1>Spy Cat</h1>
        <h1 className="name">홍길동 님</h1>
        <Serverlist name="Test1" />
        <Serverlist name="Test2" />
        <button type="button">+ 서버 추가</button>
      </div>
      <div className="logout">
        <Logout width="15px" height="15px" />
        <button type="button">로그 아웃</button>
      </div>
    </Nav>
  );
}

export default Sidebar;
