import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function VerticalChart({ name, data, width, height }) {
  const [ratio, setRatio] = useState(8);
  const [barWidth, setBarWidth] = useState(30);
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });
  const maxValue = maxObjArr.value;
  const totalWidth = barWidth * data.length;

  if (maxValue * ratio > height * 0.8) {
    setRatio(Math.floor(ratio * 0.75));
  } else if (maxValue * ratio < height / 2) {
    setRatio(Math.floor(ratio * 1.5));
  }

  if (totalWidth > width - 150) {
    setBarWidth(barWidth * 0.97);
  } else if (totalWidth < width * 0.5) {
    setBarWidth(barWidth * 1.2);
  }

  const barGroups = data.map((d, i) => {
    return (
      <g transform={`translate(${i * barWidth}, 0)`} key={uuid()}>
        <VerticalGroup
          data={d}
          barWidth={barWidth}
          ratio={ratio}
          height={height}
        />
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g className="container">
        <text className="title" x="10" y="30">
          {name}
        </text>
        <g className="chart" transform="translate(80, 60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
}

function VerticalGroup({ ratio, data, barWidth, height }) {
  const barPadding = 5;
  const barColor = "#348AA7";
  const heightScale = d => d * ratio;
  const xMid = barWidth * 0.5;
  const barHeight = heightScale(data.value);
  const startY = height - (barHeight + 100);

  return (
    <g className="group">
      <text
        className="name-label vertical"
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
      <text
        className="value-label vertical"
        x={xMid}
        y="-10"
        alignmentBaseline="middle"
      >
        {data.value}
      </text>
    </g>
  );
}
