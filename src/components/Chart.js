import React from "react";
import styled from "styled-components";

import HorizontalChart from "../utils/HorizontalChart";
import LineChart from "../utils/LineChart";
import DonutChart from "../utils/DonutChart";
import mockData from "../utils/mockData.json";
import "../utils/chart.css";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Chart() {
  return (
    <EntryWrapper>
      <div>
        <HorizontalChart
          name="Horizontal"
          data={mockData.horizontalMock}
          height="350"
          width="500"
        />
        <DonutChart
          data={mockData.horizontalMock}
          color={mockData.color}
          name="sub1"
          width="350"
          height="350"
        />
      </div>
      <div>
        <LineChart
          name="Line"
          width={900}
          height={500}
          data={mockData.lineMock}
          horizontalGuides={5}
          precision={0}
        />
      </div>
    </EntryWrapper>
  );
}

export default Chart;
