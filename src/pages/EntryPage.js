import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LogoHeader from "../components/LogoHeader";
import TrafficCharts from "../components/TrafficCharts";
import Handler from "../handlers/trafficHandlers";
import mockData from "../utils/MockData";
import EntryWrapper from "../styles/ChartPageStyles";

function EntryPage() {
  const { selectDate } = useSelector(state => state.traffic);
  const data = Handler.totalTraffics(mockData.traffics);
  const selectedData = Handler.dailyTraffics(mockData.traffics, selectDate);

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
