import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../assets/img/logo.jpg";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MyPage() {
  const { name } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) return navigate("/login");
  }, [name]);

  return (
    <EntryWrapper>
      <header className="logo-header">
        <img alt="logo" src={logo} width="60px" height="60px" />
        <h1>Spy Cat</h1>
      </header>
      <div>서버를 선택해주세요</div>
    </EntryWrapper>
  );
}

export default MyPage;
