import React from "react";
import styled from "styled-components";

import LogoHeader from "./LogoHeader";
import VerticalChart from "../utils/VerticalChart";
import mockData from "../utils/mockData.json";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import "../utils/chart.css";

const EntryWrapper = styled.div`
  width: 100%;
  height: 100%;

  .small-logo-header {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .server-title {
    flex-grow: 1;
    font-weight: 700;
    font-size: 2.5em;
    margin-right: 100px;
  }

  .chart-area {
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-chart {
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: antiquewhite;
    }

    .sub-charts {
      margin-top: 10px;
      width: 100%;
      background-color: aquamarine;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
function Traffic() {
  return (
    <EntryWrapper>
      <header className="small-logo-header">
        <LogoHeader size="30px" />
        <h1 className="server-title">My Test Server 1</h1>
      </header>
      <main className="chart-area">
        <section className="main-chart">
          <VerticalChart
            data={mockData.verticalMock}
            name="Daily Traffics"
            height={500}
            width={1000}
          />
        </section>
        <section className="sub-charts">
          <DonutChart
            data={mockData.horizontalMock}
            color={mockData.color}
            name="sub1"
            width="350"
            height="350"
          />
          <HorizontalChart
            data={mockData.donutMock}
            name="sub"
            height="350"
            width="500"
          />
        </section>
      </main>
    </EntryWrapper>
  );
}

export default Traffic;
