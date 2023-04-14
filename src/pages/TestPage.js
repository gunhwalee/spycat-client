import React from "react";
import DonutChart from "../utils/DonutChart";
import HorizontalChart from "../utils/HorizontalChart";

function TestPage() {
  const data = [];

  return (
    <>
      <DonutChart data={data} name="sub1" width="350" height="350" />
      <HorizontalChart data={data} name="sub2" height="350" width="500" />
    </>
  );
}

export default TestPage;
