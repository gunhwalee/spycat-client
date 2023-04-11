import React from "react";
import "./horizontalChart.css";
import { v4 as uuid } from "uuid";

export default function BarHorizontalChart({ data, width, height }) {
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });

  const maxValue = maxObjArr.value;
  let ratio = 10;
  if (maxValue * ratio > width - 200) {
    const number = (width - 200) / (maxValue * ratio);

    console.log(number);
    ratio = 10 * number;
  }
  const barHeight = 30;
  const barGroups = data.map((d, i) => {
    return (
      <g transform={`translate(0, ${i * barHeight})`} key={uuid()}>
        <BarHorizontalGroup data={d} barHeight={barHeight} ratio={ratio} />
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g className="container">
        <text className="title" x="10" y="30">
          Horizontal Chart
        </text>
        <g className="chart" transform="translate(100, 60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
}

function BarHorizontalGroup({ ratio, data, barHeight }) {
  const barPadding = 8;
  const barColor = "#7289da";
  const widthScale = d => d * ratio;
  const width = widthScale(data.value);
  const yMid = barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {data.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={barHeight - barPadding}
        fill={barColor}
      />
      <text
        className="value-label"
        x={width + 5}
        y={yMid}
        alignmentBaseline="middle"
      >
        {data.value}
      </text>
    </g>
  );
}
