import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import LogoHeader from "../components/LogoHeader";
import TrafficCharts from "../components/TrafficCharts";
import Handler from "../handlers/trafficHandlers";
import { saveData, deleteData } from "../features/trafficSlice";

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
      height: 500px;
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
  }
`;

function TrafficPage() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { apikey } = useSelector(state => state.user);
  const { serverName, url, traffics, selectDate } = useSelector(
    state => state.traffic,
  );
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrafficData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/traffics`,
          { withCredentials: true },
        );

        if (response.data.result === "error") {
          return setErrorMessage(response.data.message);
        }

        dispatch(
          saveData({
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

    if (id) getTrafficData();

    return () => {
      setData(null);
      dispatch(deleteData());
    };
  }, [id]);

  useEffect(() => {
    if (traffics) {
      setData(Handler.totalTraffics(traffics));
      setSelectedData(Handler.dailyTraffics(traffics, selectDate));
    }
  }, [traffics]);

  return (
    <EntryWrapper>
      <header className="small-logo-header">
        <Link to="/">
          <LogoHeader size="30px" />
        </Link>
        <h1 className="server-title">{serverName}</h1>
        <h1 className="server-url">{errorMessage || url}</h1>
      </header>
      <TrafficCharts data={data} selectedData={selectedData} />
    </EntryWrapper>
  );
}

export default TrafficPage;
