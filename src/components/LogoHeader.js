import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.jpg";

const LogoBox = styled.div`
  display: flex;

  .logo {
    opacity: 0.5;
  }
`;

function LogoHeader({ size }) {
  return (
    <LogoBox>
      <img alt="logo" src={logo} width={size} height={size} />
      <h1 style={{ fontSize: size, marginLeft: "5px" }}>Spy Cat</h1>
    </LogoBox>
  );
}

export default LogoHeader;
