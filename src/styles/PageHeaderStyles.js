import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;

  .container {
    flex: 1;
    flex-direction: row;

    a {
      display: flex;
    }
  }

  .last {
    display: flex;
    justify-content: flex-end;
  }

  .title {
    font-weight: 700;
    font-size: 40px;
  }

  .text {
    font-weight: 400;
    font-size: 15px;
  }
`;

export default Header;
