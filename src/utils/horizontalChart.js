import React, { useState } from "react";
import "./horizontalChart.css";
import { v4 as uuid } from "uuid";

export default function BarHorizontalChart({ data }) {
  const [ratio, setRatio] = useState(8);
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });
  const width = 500;

  const maxValue = maxObjArr.value;
  if (maxValue * ratio > width * 0.8) {
    setRatio(Math.floor(ratio * 0.75));
  } else if (maxValue * ratio < width / 2) {
    setRatio(Math.floor(ratio * 1.5));
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
    <svg width={width} height="500">
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
  const barPadding = 5;
  const barColor = "#7289da";
  const widthScale = d => d * ratio;
  const yMid = barHeight * 0.5;
  const barWidth = widthScale(data.value);

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {data.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={barWidth}
        height={barHeight - barPadding}
        fill={barColor}
      />
      <text
        className="value-label"
        x={barWidth + 5}
        y={yMid}
        alignmentBaseline="middle"
      >
        {data.value}
      </text>
    </g>
  );
}
