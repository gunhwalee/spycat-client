/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import LogoHeader from "../components/LogoHeader";
import TrafficCharts from "../components/TrafficCharts";
import Handler from "../handlers/trafficHandlers";
import mockData from "../utils/MockData";
// import { setData, resetData } from "../features/trafficSlice";

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
function EntryPage() {
  const { apikey } = useSelector(state => state.user);
  const { selectDate } = useSelector(state => state.traffic);
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = Handler.totalTraffics(mockData.traffics);
  const selectedData = Handler.dailyTraffics(mockData.traffics, selectDate);

  // useEffect(() => {
  //   const getTrafficData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_SPYCAT_SERVER}/users/${apikey}/servers/${id}/traffics`,
  //         { withCredentials: true },
  //       );

  //       if (response.data.result === "error") {
  //         return setErrorMessage(response.data.message);
  //       }

  //       dispatch(
  //         setData({
  //           serverName: response.data.serverName,
  //           url: response.data.url,
  //           traffics: response.data.traffics,
  //         }),
  //       );
  //     } catch (err) {
  //       console.error(err);
  //       return setErrorMessage(
  //         "서버 접속이 원활하지 않습니다. 잠시 후 시도해주세요.",
  //       );
  //     }
  //   };

  //   if (id) getTrafficData();

  //   if (!id) dispatch(resetData());
  // }, [id]);

  return (
    <EntryWrapper>
      <header className="small-logo-header">
        <Link to="/">
          <LogoHeader size="30px" />
        </Link>
        <h1 className="server-title">예시용 차트</h1>
        <h1 className="server-url">서버를 선택하세요</h1>
      </header>
      <TrafficCharts data={data} selectedData={selectedData} />
    </EntryWrapper>
  );
}

export default EntryPage;
