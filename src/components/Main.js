import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/img/logo.jpg";
import { COLORS } from "../assets/constants";

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

  .move-login {
    width: 216px;
    border: none;
    font-size: 18px;
    background-color: ${COLORS.LOGIN};
    cursor: pointer;
    padding: 15px 0px;
    border-radius: 5px;
    margin-bottom: 25px;
  }

  .move-signup {
    color: ${COLORS.GRAY};
  }
`;

function Main() {
  const { name } = useSelector(state => state.user);
  return (
    <EntryWrapper>
      <header>
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <main className="chart-example">차트그림</main>
      {!name && (
        <>
          <Link to="/login">
            <button type="button" className="move-login">
              로그인
            </button>
          </Link>
          <Link to="/signup">
            <span className="move-signup">회원가입</span>
          </Link>
        </>
      )}
    </EntryWrapper>
  );
}

export default Main;
