import React from "react";
import "./verticalChart.css";
import { v4 as uuid } from "uuid";

export default function BarVerticalChart({ data, width, height }) {
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });

  const maxValue = maxObjArr.value;
  let ratio = 10;
  if (maxValue * ratio > height - 100) {
    const number = (height - 100) / (maxValue * ratio);
    ratio = 10 * number;
  }
  const barWidth = 30;
  const barGroups = data.map((d, i) => {
    return (
      <g transform={`translate(${i * barWidth}, 0)`} key={uuid()}>
        <BarVerticalGroup data={d} barWidth={barWidth} ratio={ratio} />
      </g>
    );
  });
  console.log(width, height);

  return (
    <svg width={width} height={height}>
      <g className="verticalcontainer">
        <text className="vertical-title" x="10" y="30">
          Vertical Chart
        </text>
        <g className="verticalchart" transform="translate(100, 60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
}

function BarVerticalGroup({ ratio, data, barWidth }) {
  const barPadding = 5;
  const barColor = "#348AA7";
  const heightScale = d => d * ratio;
  const xMid = barWidth * 0.5;
  const height = heightScale(data.value);
  const startY = 200 - height;

  console.log(height);
  return (
    <g className="verticalbar-group">
      <text className="name-label" x={xMid} y="215" alignmentBaseline="middle">
        {data.name}
      </text>
      <rect
        x={barPadding * 0.5}
        y={startY}
        width={barWidth - barPadding}
        height={height}
        fill={barColor}
      />
      <text className="value-label" x={xMid} y="-10" alignmentBaseline="middle">
        {data.value}
      </text>
    </g>
  );
}
