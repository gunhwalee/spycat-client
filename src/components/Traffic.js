/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoHeader from "./LogoHeader";
import VerticalChart from "../utils/VerticalChart";
import MockData from "../utils/MockData";
import mockData from "../utils/mockData.json";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import Handler from "../handlers/trafficHandlers";
import "../utils/chart.css";

const EntryWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #787878;

  .small-logo-header {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 5px;
  }

  .server-title {
    flex-grow: 1;
    font-weight: 700;
    font-size: 2.5em;
    margin-right: 100px;
  }

  .chart-area {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-chart {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      background-color: white;
      border-radius: 10px;
    }

    .sub-charts {
      margin-top: 10px;
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
        margin-right: 5px;
      }

      .sub2-chart {
        margin-left: 5px;
      }
    }
  }
`;
function Traffic() {
  const result = Handler.dailyTraffics(MockData);

  return (
    <EntryWrapper>
      <header className="small-logo-header">
        <Link to="/">
          <LogoHeader size="30px" />
        </Link>
        <h1 className="server-title">My Test Server 1</h1>
      </header>
      <main className="chart-area">
        <section className="main-chart">
          <VerticalChart
            data={result}
            name="Daily Traffics"
            height={500}
            width={1000}
          />
        </section>
        <section className="sub-charts">
          <article className="sub1-chart">
            <DonutChart
              data={mockData.horizontalMock}
              color={mockData.color}
              name="sub1"
              width="350"
              height="350"
            />
          </article>
          <article className="sub2-chart">
            <HorizontalChart
              data={mockData.donutMock}
              name="sub"
              height="350"
              width="500"
            />
          </article>
        </section>
      </main>
    </EntryWrapper>
  );
}

export default Traffic;
