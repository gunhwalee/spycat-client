import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogoHeader from "./LogoHeader";

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
      <header className="big-logo-header">
        <LogoHeader size="60px" />
      </header>
      <div>서버를 선택해주세요</div>
    </EntryWrapper>
  );
}

export default MyPage;
