import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

import Handler from "../handlers/trafficHandlers";
import { selectDay } from "../features/trafficSlice";

const ErrorBox = styled.div`
  height: 500px;
  display: flex;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 24px;
  }
`;

export default function VerticalChart({ name, data, width, height }) {
  const [ratio, setRatio] = useState(8);
  const [barWidth, setBarWidth] = useState(30);
  const array = Handler.XAxisArray();
  const maxObjArr = data.reduce((prev, next) => {
    return prev.value >= next.value ? prev : next;
  });

  if (maxObjArr.value === 0)
    return (
      <ErrorBox>
        <h1>저장된 트래픽 정보가 없습니다.</h1>
      </ErrorBox>
    );

  const maxValue = maxObjArr.value || 50;
  const totalWidth = barWidth * 28;

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

  const barGroups = array.map((d, i) => {
    return (
      <g transform={`translate(${i * barWidth}, 0)`} key={uuid()}>
        <VerticalGroup
          data={data[array[i] - 1]}
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
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const barPadding = 5;
  const barColor = "#348AA7";
  const heightScale = d => d * ratio;
  const xMid = barWidth * 0.5;
  const barHeight = heightScale(data.value);
  const startY = height - (barHeight + 100);

  const clickHandler = () => {
    const selectDate = nameRef.current.textContent;
    dispatch(selectDay({ selectDate }));
  };

  return (
    <g className="group" onClick={clickHandler}>
      <text
        className="name-label vertical"
        x={xMid}
        y={height - 80}
        alignmentBaseline="middle"
        ref={nameRef}
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
