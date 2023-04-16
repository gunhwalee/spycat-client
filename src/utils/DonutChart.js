import { v4 as uuid } from "uuid";
import { CHART_COLORS } from "../assets/constants";

export default function DonutChart({ name, data, width, height }) {
  const cx = 175;
  const cy = 175;
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
          <circle
            className="background"
            r={radius}
            cx={cx}
            cy={cy}
            fill="transparent"
            stroke="black"
            strokeWidth={radius / 2}
          />
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
                  stroke={CHART_COLORS[index]}
                  strokeWidth={radius / 2}
                  strokeDasharray={`${strokeLength} ${spaceLength}`}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90, ${cx}, ${cy})`}
                />
                <text
                  className="value-label donut"
                  x="70%"
                  y="20%"
                  alignmentBaseline="middle"
                >
                  traffic: {element.value}
                </text>
                <text
                  className="name-label donut"
                  x="70%"
                  y="30%"
                  alignmentBaseline="middle"
                >
                  route: {element.name}
                </text>
                <text
                  className="per-label donut"
                  x={cx}
                  y={cy}
                  alignmentBaseline="middle"
                >
                  {(ratio * 100).toFixed(1)}%
                </text>
              </g>
            );
          })}
          <g className="chart-text">
            <text x={cx} y={cy} className="total-number">
              {total}
            </text>
            <text x={cx} y={cy} className="total-label">
              Total
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
