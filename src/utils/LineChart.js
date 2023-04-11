import React from "react";
import "./LineChart.css";
import { v4 as uuid } from "uuid";

export default function LineChart({
  data,
  width,
  height,
  precision,
  horizontalGuides,
}) {
  const FONT_SIZE = width / 50;
  const maximumXFromData = Math.max(...data.map(e => e.x));
  const maximumYFromData = Math.max(...data.map(e => e.y * 1.2));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 5;
  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const LabelsYAxis = () => {
    const PARTS = horizontalGuides;

    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = -30;
      const ratio = index / horizontalGuides;
      const yCorrdinate = chartHeight - chartHeight * ratio + FONT_SIZE / 2;

      return (
        <text x={x} y={yCorrdinate} className="value-label" key={uuid()}>
          {parseFloat(maximumYFromData * (index / PARTS)).toFixed(precision)}
        </text>
      );
    });
  };

  const points = data
    .map(element => {
      const x = (element.x / maximumXFromData) * chartWidth + 10;
      const y = chartHeight - (element.y / maximumYFromData) * chartHeight;

      return `${x},${y}`;
    })
    .join(" ");

  const pointNode = data.map(element => {
    const x = (element.x / maximumXFromData) * chartWidth + 10;
    const y = chartHeight - (element.y / maximumYFromData) * chartHeight;
    const labelY = chartHeight + FONT_SIZE * 3;

    return (
      <g className="node-group" key={uuid()}>
        <text x={x} y={y - 15} className="values">
          {element.y}
        </text>
        <circle cx={x} cy={y} r="20" fill="transparent" stroke="none">
          {element.y}
        </circle>
        <text x={x} y={labelY} className="name-label">
          {element.label}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g className="linecontainer">
        <text className="line-title" x="10" y="30">
          Vertical Chart
        </text>
        <g className="linechart" transform="translate(100, 60)">
          <LabelsYAxis />
          <polyline
            className="path"
            fill="none"
            stroke="#EB3232"
            strokeWidth="3"
            points={points}
          />
          {pointNode}
        </g>
      </g>
    </svg>
  );
}
