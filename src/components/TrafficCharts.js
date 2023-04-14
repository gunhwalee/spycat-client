import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import LogoHeader from "./LogoHeader";
import VerticalChart from "../utils/VerticalChart";
import HorizontalChart from "../utils/HorizontalChart";
import DonutChart from "../utils/DonutChart";
import Handler from "../handlers/trafficHandlers";
import { setData } from "../features/trafficSlice";
import "../utils/chart.css";

const EntryWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #787878;

  .small-logo-header {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;

    .server-title {
      font-weight: 700;
      font-size: 2.5em;
      cursor: pointer;
    }
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
function TrafficCharts() {
  const { apikey } = useSelector(state => state.user);
  const { serverName, url, traffics, selectDate } = useSelector(
    state => state.traffic,
  );
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = Handler.totalTraffics(traffics);
  const selectedData = Handler.dailyTraffics(traffics, selectDate);

  useEffect(() => {
    const getTrafficData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/traffics`,
          { withCredentials: true },
        );

        console.log(response);
        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        dispatch(
          setData({
            serverName: response.data.serverName,
            url: response.data.url,
            traffics: response.data.traffics,
          }),
        );
      } catch (err) {
        console.error(err);
        return setErrorMessage(
          "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
        );
      }
    };

    getTrafficData();
  }, []);

  return (
    <EntryWrapper>
      <header className="small-logo-header">
        <Link to="/">
          <LogoHeader size="30px" />
        </Link>
        <h1 className="server-title">{serverName}</h1>
        <h1 className="server-url">{errorMessage || url}</h1>
      </header>
      <main className="chart-area">
        <section className="main-chart">
          <VerticalChart
            data={data.dailyTraffic}
            name="Daily Traffics"
            height={500}
            width={1000}
          />
        </section>
        <section className="sub-charts">
          <article className="sub1-chart">
            <DonutChart
              data={
                selectedData ? selectedData.routesTraffic : data.routesTraffic
              }
              name="sub1"
              width="350"
              height="350"
            />
          </article>
          <article className="sub2-chart">
            <HorizontalChart
              data={selectedData ? selectedData.timeTraffic : data.timeTraffic}
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

export default TrafficCharts;
