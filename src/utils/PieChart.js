import React from "react";
import "./PieChart.css";
import { v4 as uuid } from "uuid";

const data = [
  {
    name: "kentcdodds",
    value: 20,
  },
  {
    name: "sindresorhus",
    value: 40,
  },
  {
    name: "developit",
    value: 35,
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
    value: 40,
  },
];

const color = [
  "#b1c94e",
  "#aaddff",
  "#ce4b99",
  "#b1c94e",
  "#aaddff",
  "#ce4b99",
];

export default function PieChart({ name }) {
  const offsets = [];
  const total = data.reduce((accumulator, currentValue) => {
    offsets.push(accumulator);
    return accumulator + currentValue.value;
  }, 0);
  const initialOffset = 25;
  const pers = [];
  data.reduce((accumulator, currentValue) => {
    pers.push((accumulator / total) * 100);
    return accumulator + currentValue.value;
  }, 0);

  const contents = data.map((element, index) => {
    const per = (element.value / total) * 100;
    const dasharray = `${per} ${100 - per}`;
    const dashoffset = initialOffset - (offsets[index] / total) * 100;

    return (
      <circle
        key={uuid()}
        id={`donut-segment${index + 1}`}
        cx="200"
        cy="200"
        r="100"
        fill="transparent"
        stroke={color[index]}
        strokeWidth="50"
        strokeDasharray={dasharray}
        strokeDashoffset={dashoffset}
      />
    );
  });

  return (
    <svg height="400" width="400">
      <g className="pie-container">
        <text className="title" x="10" y="30">
          {name}
        </text>
        <circle className="donut-hole" cx="200" cy="200" r="100" fill="#fff" />
        {contents}
        <g className="chart-text">
          <text x="50%" y="50%" className="chart-number" id="totalValue">
            {total}
          </text>
          <text x="50%" y="50%" className="chart-label">
            Total
          </text>
        </g>
      </g>
    </svg>
  );
}
