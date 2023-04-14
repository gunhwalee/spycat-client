import React from "react";
import styled from "styled-components";

import VerticalChart from "../utils/VerticalChart";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import "../utils/chart.css";

const Main = styled.main`
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
`;
function TrafficCharts({ data, selectedData }) {
  console.log(data);
  return (
    <Main className="chart-area">
      <section className="main-chart">
        {data ? (
          <VerticalChart
            data={data.dailyTraffic}
            name="Daily Traffics"
            height={500}
            width={1000}
          />
        ) : (
          <div className="loading-box">
            <div className="spinner" />
            <h1>로딩중입니다.</h1>
          </div>
        )}
      </section>
      <section className="sub-charts">
        <article className="sub1-chart">
          {data && (
            <DonutChart
              data={
                selectedData ? selectedData.routesTraffic : data.routesTraffic
              }
              name="sub1"
              width="350"
              height="350"
            />
          )}
        </article>
        <article className="sub2-chart">
          {data && (
            <HorizontalChart
              data={selectedData ? selectedData.timeTraffic : data.timeTraffic}
              name="sub2"
              height="350"
              width="500"
            />
          )}
        </article>
      </section>
    </Main>
  );
}

export default TrafficCharts;
