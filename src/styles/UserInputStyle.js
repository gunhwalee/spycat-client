import styled from "styled-components";
import { COLORS } from "../assets/constants";

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #submit-form {
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    .box {
      display: flex;
      padding: 10px 0px;

      .pwBtn {
        cursor: pointer;
        border: none;
        background-color: transparent;
      }
    }

    & input {
      border: none;
      font-size: 16px;
      margin-left: 5px;
      border-bottom: 1px solid ${COLORS.GRAY};
    }

    & input:focus {
      outline: none;
    }

    .submitBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.LOGIN};
      cursor: pointer;
      padding: 15px 0px;
      border-radius: 5px;
      border: none;
      margin-bottom: 30px;
      font-size: 14px;
    }

    .spinner {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 5px solid #ccc;
      border-top-color: #333;
      animation: spin 1s infinite ease-in-out;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .rule {
      font-size: 14px;
      margin: 10px 0px;
      color: ${COLORS.BLUE};
    }

    .login {
      margin-bottom: 34px;
    }
  }

  .moveBtn {
    border: none;
    background-color: transparent;
    cursor: pointer;

    .move {
      color: ${COLORS.GRAY};
      font-size: 14px;
    }

    .main {
      margin-right: 20px;
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
