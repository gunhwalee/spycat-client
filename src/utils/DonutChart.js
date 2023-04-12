import React from "react";
import { v4 as uuid } from "uuid";

export default function DonutChart({ name, data, color, width, height }) {
  const cx = width / 2;
  const cy = height / 2;
  const radius = cx * 0.75;
  const circumference = 2 * Math.PI * radius;
  let filled = 0;
  const total = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <g className="container">
        <text className="title" x="10" y="30">
          {name}
        </text>
        <g className="chart">
          {data.map((element, index) => {
            const ratio = element.value / total;
            const strokeLength = circumference * ratio;
            const spaceLength = circumference - strokeLength;
            const offset = filled * circumference;
            filled += ratio;
            return (
              <g className="group" key={uuid()}>
                <circle
                  r={radius}
                  cx={cx}
                  cy={cy}
                  fill="transparent"
                  stroke={color[index]}
                  strokeWidth={radius / 2}
                  strokeDasharray={`${strokeLength} ${spaceLength}`}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90, ${cx}, ${cy})`}
                />
                <text
                  className="value-label donut"
                  x={cx}
                  y={cy}
                  alignmentBaseline="middle"
                >
                  {element.value}
                </text>
                <text
                  className="name-label donut"
                  x={cx}
                  y={cy}
                  alignmentBaseline="middle"
                >
                  {element.name}
                </text>
              </g>
            );
          })}
          <g className="chart-text">
            <text x="50%" y="50%" className="total-number">
              {total}
            </text>
            <text x="50%" y="50%" className="total-label">
              Total
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
