import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function HorizontalChart({ name, data, width, height, type }) {
  const [ratio, setRatio] = useState(8);
  const [barHeight, setBarHeight] = useState(30);
  if (!data.length) return null;
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });

  const maxValue = maxObjArr.value || 50;
  const totalHeight = barHeight * data.length;

  if (maxValue * ratio > width * 0.8) {
    setRatio(Math.floor(ratio * 0.75));
  } else if (maxValue * ratio < width / 2) {
    setRatio(Math.floor(ratio * 1.5));
  }

  if (totalHeight > height - 100) {
    setBarHeight(barHeight * 0.97);
  }

  const barGroups = data.map((d, i) => {
    return (
      <g transform={`translate(0, ${i * barHeight})`} key={uuid()}>
        <HorizontalGroup
          data={d}
          barHeight={barHeight}
          ratio={ratio}
          type={type}
        />
      </g>
    );
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <g className="container">
        <text className="title" x="10" y="30">
          {name}
        </text>
        <g className="chart" transform="translate(100, 60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
}

function HorizontalGroup({ ratio, data, barHeight, type }) {
  const barPadding = 5;
  const barColor = "#7289da";
  const widthScale = d => d * ratio;
  const yMid = barHeight * 0.5;
  const barWidth = widthScale(data.value);

  return (
    <g className="group">
      <text
        className="name-label horizontal"
        x="-6"
        y={yMid}
        alignmentBaseline="middle"
      >
        {type ? data.name : `${data.name * 2} - ${(data.name + 1) * 2}시`}
      </text>
      <rect
        y={barPadding * 0.5}
        width={barWidth}
        height={barHeight - barPadding}
        fill={barColor}
      >
        <animate
          attributeName="width"
          from="0"
          to={barWidth}
          dur="1s"
          begin="0s"
        />
      </rect>
      <text
        className="value-label horizontal"
        x={barWidth + 5}
        y={yMid}
        alignmentBaseline="middle"
      >
        <animate
          attributeName="x"
          from="5"
          to={barWidth + 5}
          dur="1s"
          begin="0s"
        />
        {data.value}
      </text>
    </g>
  );
}
