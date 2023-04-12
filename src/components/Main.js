import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoHeader from "./LogoHeader";
import { COLORS } from "../assets/constants";
import mockData from "../utils/mockData.json";
import VerticalChart from "../utils/VerticalChart";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .chart-example {
    width: 1000px;
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
      <header className="big-logo-header">
        <LogoHeader size="60px" />
      </header>
      <main className="chart-example">
        <VerticalChart
          name="Vertical"
          data={mockData.verticalMock}
          height={500}
          width={1000}
        />
      </main>
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
