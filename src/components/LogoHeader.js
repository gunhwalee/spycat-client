import styled from "styled-components";
import { SIZE } from "../assets/constants";
import logo from "../assets/img/logo.png";

const LogoBox = styled.div`
  display: flex;
  margin: ${SIZE.MARGIN * 10}px 0px ${SIZE.MARGIN * 5}px;

  h1 {
    font-size: ${SIZE.BIG_LOGO}px;
    margin-left: ${SIZE.MARGIN}px;
    font-weight: bold;
  }
`;

function LogoHeader() {
  return (
    <LogoBox>
      <img alt="logo" src={logo} width={SIZE.BIG_LOGO} height={SIZE.BIG_LOGO} />
      <h1>Spy Cat</h1>
    </LogoBox>
  );
}

export default LogoHeader;
