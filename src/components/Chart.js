import React from "react";
import styled from "styled-components";
import HorizontalChart from "../utils/horizontalChart";
import LineChart from "../utils/LineChart";
import DonutChart from "../utils/DonutChart";
import mockData from "../utils/mockData.json";

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
        <HorizontalChart name="Horizontal" data={mockData.horizontalMock} />
        <DonutChart name="Donut" />
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
