import styled from "styled-components";
import { SIZE } from "../assets/constants";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-chart {
    width: 100%;
    margin-top: ${SIZE.MARGIN}px;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
  }

  .sub-charts {
    margin-top: ${SIZE.MARGIN}px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .sub1-chart,
    .sub2-chart {
      background-color: white;
      width: 100%;
      border-radius: 10px;
    }

    .sub1-chart {
      margin-right: ${SIZE.MARGIN / 2}px;
    }

    .sub2-chart {
      margin-left: ${SIZE.MARGIN / 2}px;
    }
  }

  .loading-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .spinner {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      border: 100px solid #ccc;
      border-top-color: #333;
      animation: spin 1.5s infinite ease-in-out;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    h1 {
      margin-top: 30px;
      font-size: 24px;
    }
  }
`;

export default Main;
