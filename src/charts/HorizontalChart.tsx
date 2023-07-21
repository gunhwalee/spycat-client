import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ErrorCount } from "../types/handlers";

interface ChartProps {
  name: string,
  data: ErrorCount[],
  width: number,
  height: number,
}

interface GroupProps {
  ratio: number,
  data: ErrorCount,
  barHeight: number,
}

export default function HorizontalChart({ name, data, width, height }: ChartProps): JSX.Element {
  const [ratio, setRatio] = useState<number>(8);
  const [barHeight, setBarHeight] = useState<number>(30);
  if (!data.length) return <></>;
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
        <HorizontalGroup data={d} barHeight={barHeight} ratio={ratio} />
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

function HorizontalGroup({ ratio, data, barHeight }: GroupProps) {
  const barPadding: number = 5;
  const barColor: string = "#7289da";
  const widthScale = (d: number) => d * ratio;
  const yMid: number = barHeight! * 0.5;
  const barWidth: number = widthScale(data.value);

  return (
    <g className="group">
      <text
        className="name-label horizontal"
        x="-6"
        y={yMid}
        alignmentBaseline="middle"
      >
        {`${Number(data.name) * 2} - ${(Number(data.name) + 1) * 2}시`}
      </text>
      <rect
        y={barPadding * 0.5}
        width={barWidth}
        height={barHeight! - barPadding}
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
