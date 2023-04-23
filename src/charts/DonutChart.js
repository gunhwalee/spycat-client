import { v4 as uuid } from "uuid";
import { CHART_COLORS } from "../assets/constants";

export default function DonutChart({ name, data, width, height }) {
  const cx = width * 0.3;
  const cy = 185;
  const radius = 100;
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
                  stroke={CHART_COLORS[index]}
                  strokeWidth={radius / 1.5}
                  strokeDasharray={`${strokeLength} ${spaceLength}`}
                  strokeDashoffset={-offset}
                  transform={`rotate(-90, ${cx}, ${cy})`}
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from={`0 ${circumference}`}
                    to={`${strokeLength} ${spaceLength}`}
                    dur="1s"
                    begin="0s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={`${-offset}`}
                    dur="1s"
                    begin="0s"
                    fill="freeze"
                  />
                </circle>
                <text
                  className="value-label donut"
                  x="60%"
                  y="20%"
                  alignmentBaseline="middle"
                >
                  count: {element.value}
                </text>
                <text
                  className="name-label donut"
                  x="60%"
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
