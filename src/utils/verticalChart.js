import React, { useState } from "react";
import "./verticalChart.css";
import { v4 as uuid } from "uuid";

export default function BarVerticalChart({ name, data }) {
  const [ratio, setRatio] = useState(8);
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });
  const height = 500;

  const maxValue = maxObjArr.value;
  if (maxValue * ratio > height * 0.8) {
    setRatio(Math.floor(ratio * 0.75));
  } else if (maxValue * ratio < height / 2) {
    setRatio(Math.floor(ratio * 1.5));
  }
  const barWidth = 30;

  const barGroups = data.map((d, i) => {
    return (
      <g transform={`translate(${i * barWidth}, 0)`} key={uuid()}>
        <BarVerticalGroup
          data={d}
          barWidth={barWidth}
          ratio={ratio}
          height={height}
        />
      </g>
    );
  });

  return (
    <svg width="1000" height={height}>
      <g className="verticalcontainer">
        <text className="vertical-title" x="10" y="30">
          {name}
        </text>
        <g className="verticalchart" transform="translate(80, 60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
}

function BarVerticalGroup({ ratio, data, barWidth, height }) {
  const barPadding = 5;
  const barColor = "#348AA7";
  const heightScale = d => d * ratio;
  const xMid = barWidth * 0.5;
  const barHeight = heightScale(data.value);
  const startY = height - (barHeight + 100);

  return (
    <g className="verticalbar-group">
      <text
        className="name-label"
        x={xMid}
        y={height - 80}
        alignmentBaseline="middle"
      >
        {data.name}
      </text>
      <rect
        x={barPadding * 0.5}
        y={startY}
        width={barWidth - barPadding}
        height={barHeight}
        fill={barColor}
      />
      <text className="value-label" x={xMid} y="-10" alignmentBaseline="middle">
        {data.value}
      </text>
    </g>
  );
}
