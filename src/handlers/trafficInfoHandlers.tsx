import { Traffics } from "../types/state";
import { TrafficData, ErrorCount, DailyTrafficData } from "../types/handlers"

export const totalTraffics = (data: Traffics[]) => {
  const result: TrafficData = { dailyTraffic: [], routesTraffic: [], timeTraffic: [] };
  result.timeTraffic = Array(12)
    .fill({})
    .map((v, i) => {
      const obj = { name: i, value: 0 };
      return obj;
    });

  for (let i = 0; i < 31; i += 1) {
    result.dailyTraffic[i] = { name: i + 1, value: 0 };
  }

  for (let i = 0; i < data.length; i += 1) {
    const date = new Date(data[i].createdAt.toString());
    let day = String(date).slice(8, 10);
    if (Number(day) < 10) day = day.slice(1);

    for (let j = 0; j < 31; j += 1) {
      if (result.dailyTraffic[j].name === Number(day))
        result.dailyTraffic[j].value += 1;
    }

    const { path } = data[i];
    const hasPath = (element: ErrorCount) => element.name === path;

    if (!result.routesTraffic.some(hasPath))
      result.routesTraffic.push({ name: path, value: 0 });

    result.routesTraffic.forEach(element => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const time = Math.floor(Number(String(date).slice(16, 18)) / 2);
    result.timeTraffic.forEach(element => {
      if (element.name === time) {
        element.value += 1;
      }
    });
  }

  result.routesTraffic.sort((a, b) => b.value - a.value);

  return result;
};

export const XAxisArray = () => {
  const date = new Date();
  const today = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDate = new Date(year, month, 0).getDate();
  const result = Array(28)
    .fill({})
    .map((v, i) => {
      let num = i + lastDate - 27 + today;
      if (num > lastDate) num -= lastDate;
      return num;
    });

  return result;
};

export const dailyTraffics = (data: Traffics[], date: string | null) => {
  if (date === null) return null;
  const result: DailyTrafficData = { routesTraffic: [], timeTraffic: [] };
  result.timeTraffic = Array(12)
    .fill({})
    .map((v, i) => {
      const obj = { name: i, value: 0 };
      return obj;
    });

  for (let i = 0; i < data.length; i += 1) {
    const newDate = new Date(data[i].createdAt.toString());
    let day = String(newDate).slice(8, 10);
    if (Number(day) < 10) day = day.slice(1);
    if (day !== date) continue;

    const { path } = data[i];
    const hasPath = (element: ErrorCount) => element.name === path;

    if (!result.routesTraffic.some(hasPath))
      result.routesTraffic.push({ name: path, value: 0 });

    result.routesTraffic.forEach(element => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const trafficDate = new Date(data[i].createdAt.toString());
    const time = Math.floor(Number(String(trafficDate).slice(16, 18)) / 2);
    result.timeTraffic.forEach(element => {
      if (element.name === time) {
        element.value += 1;
      }
    });
  }

  result.routesTraffic.sort((a, b) => b.value - a.value);

  return result;
};
