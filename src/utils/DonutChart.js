import React from "react";
import "./DonutChart.css";
import { v4 as uuid } from "uuid";

const data = [
  {
    name: "kentcdodds",
    value: 28,
  },
  {
    name: "sindresorhus",
    value: 40,
  },
  {
    name: "developit",
    value: 30,
  },
  {
    name: "getify",
    value: 50,
  },
  {
    name: "btholt",
    value: 62,
  },
  {
    name: "kyleshevlin",
    value: 90,
  },
  {
    name: "Holand",
    value: 33,
  },
];
const color = ["red", "orange", "blue", "green", "yellow", "pink", "skyblue"];

export default function DonutChart() {
  const radius = 150;
  const circumference = 2 * Math.PI * radius;
  let filled = 0;
  const total = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  return (
    <svg viewBox="0 0 400 400" width={400} height={400}>
      <g className="donut-container">
        <text className="donut-title" x="10" y="30">
          Example
        </text>
        <g className="donut-chart">
          {data.map((element, index) => {
            const ratio = element.value / total;
            const strokeLength = circumference * ratio;
            const spaceLength = circumference - strokeLength;
            const offset = filled * circumference;
            filled += ratio;
            return (
              <g className="donut-group" key={uuid()}>
                <circle
                  r={radius}
                  cx={200}
                  cy={200}
                  fill="transparent"
                  stroke={color[index]}
                  strokeWidth={radius / 2}
                  strokeDasharray={`${strokeLength} ${spaceLength}`}
                  strokeDashoffset={-offset}
                  transform="rotate(-90, 200, 200)"
                />
                <text
                  className="value-label"
                  x="200"
                  y="200"
                  alignmentBaseline="middle"
                >
                  {element.value}
                </text>
                <text
                  className="name-label"
                  x="200"
                  y="200"
                  alignmentBaseline="middle"
                >
                  {element.name}
                </text>
              </g>
            );
          })}
          <g className="chart-text">
            <text x="50%" y="50%" className="chart-number" id="totalValue">
              {total}
            </text>
            <text x="50%" y="50%" className="chart-label">
              Total
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
