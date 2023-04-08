import React from "react";
import styled from "styled-components";

import logo from "../assets/img/logo.jpg";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    margin-top: 150px;
    padding-bottom: 50px;
    font-size: 60px;

    > h1 {
      margin-left: 10px;
    }
  }

  .chart-example {
    background-color: skyblue;
    width: 500px;
    height: 500px;
    margin-bottom: 25px;
  }
`;

function Lobby() {
  return (
    <EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <div>서버를 선택해주세요</div>
    </EntryWrapper>
  );
}

export default Lobby;
