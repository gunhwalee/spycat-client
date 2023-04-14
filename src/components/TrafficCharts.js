import React from "react";
import Main from "../styles/TrafficChartStyles";

import VerticalChart from "../utils/VerticalChart";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import "../utils/chart.css";

function TrafficCharts({ data, selectedData }) {
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
              width="600"
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
