import React from "react";
import styled from "styled-components";
import HorizontalChart from "../utils/horizontalChart";
import LineChart from "../utils/LineChart";
import PieChart from "../utils/PieChart";
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
        <HorizontalChart name="Example Chart" data={mockData.horizontalMock} />
        <PieChart name="Example" />
      </div>
      <div>
        <LineChart
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
