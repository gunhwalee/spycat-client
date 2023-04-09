import styled from "styled-components";
import { COLORS } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    margin-top: 150px;
    padding-bottom: 100px;
    font-size: 60px;

    > h1 {
      margin-left: 10px;
    }
  }

  .move {
    color: ${COLORS.GRAY};
  }

  .main {
    margin-right: 20px;
  }

  #submit-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .box {
      display: flex;
      padding: 10px 0px;
      margin-bottom: 25px;

      > button {
        cursor: pointer;
        border: none;
        background-color: transparent;
      }
    }

    & input {
      border: none;
      font-size: 18px;
    }

    & input:focus {
      outline: none;
    }

    & input:not([type="submit"]) {
      margin-left: 5px;
      border-bottom: 1px solid ${COLORS.GRAY};
    }

    & input[type="submit"] {
      background-color: ${COLORS.LOGIN};
      cursor: pointer;
      padding: 15px 0px;
      border-radius: 5px;
      margin-bottom: 25px;
    }

    .btn-github {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.LOGIN};
      cursor: pointer;
      padding: 15px 0px;
      border-radius: 5px;

      > button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;

  > li {
    list-style: none;
    font-size: 14px;
    margin: 10px 0px;
  }

  .error {
    color: red;
  }
`;
