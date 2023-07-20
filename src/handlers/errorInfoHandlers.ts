import { Errors } from "../types/state";
import { ErrorButtonList } from "../types/components";
import { ErrorData, ErrorCount, DailyErrorData } from "../types/handlers";

export const ErrorNameHandler = (data: Errors[]) => {
  const errorNames: ErrorButtonList[] = [];

  for (let i = 0; i < data.length; i += 1) {
    const { errorName } = data[i];
    const hasName = (element: ErrorButtonList) => element.name === errorName;

    if (!errorNames.some(hasName))
      errorNames.push({ name: errorName, value: 0 });

    errorNames.forEach((element) => {
      if (element.name === errorName) {
        element.value += 1;
      }
    });
  }

  return errorNames;
};

export const totalErrors = (data: Errors[]) => {
  const result: ErrorData = { dailyError: [], routesError: [], errorTime: [] };
  result.errorTime = Array(12)
    .fill({})
    .map((v, i) => {
      const obj = { name: i, value: 0 };
      return obj;
    });

  for (let i = 0; i < 31; i += 1) {
    result.dailyError[i] = { name: i + 1, value: 0 };
  }

  for (let i = 0; i < data.length; i += 1) {
    const date = new Date(data[i].createdAt.toString());
    let day: string = String(date).slice(8, 10)!;
    if (Number(day) < 10) day = day.slice(1);

    for (let j = 0; j < 31; j += 1) {
      if (result.dailyError[j].name === Number(day))
        result.dailyError[j].value += 1;
    }

    const { path } = data[i];
    const hasPath = (element: ErrorCount) => element.name === path;

    if (!result.routesError.some(hasPath))
      result.routesError.push({ name: path, value: 0 });

    result.routesError.forEach((element) => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const time: number = Math.floor(Number(String(date).slice(16, 18)) / 2);
    result.errorTime.forEach((element) => {
      if (element.name === time) {
        element.value += 1;
      }
    });
  }

  result.routesError.sort((a, b) => b.value - a.value);

  return result;
};

export const dailyErrors = (data: Errors[], date: string | null) => {
  if (date === null) return null;
  const result: DailyErrorData = { routesError: [], errorTime: [] };
  result.errorTime = Array(12)
    .fill({})
    .map((v, i) => {
      const obj = { name: i, value: 0 };
      return obj;
    });

  for (let i = 0; i < data.length; i += 1) {
    const newDate = new Date(data[i].createdAt.toString());
    let day: string = String(date).slice(8, 10)!;
    if (Number(day) < 10) day = day.slice(1);
    if (day !== date) continue;

    const { path } = data[i];
    const hasPath = (element: ErrorCount) => element.name === path;

    if (!result.routesError.some(hasPath))
      result.routesError.push({ name: path, value: 0 });

    result.routesError.forEach((element) => {
      if (element.name === path) {
        element.value += 1;
      }
    });

    const time = Math.floor(Number(String(newDate).slice(16, 18)) / 2);
    result.errorTime.forEach((element) => {
      if (element.name === time) {
        element.value += 1;
      }
    });
  }

  result.routesError.sort((a, b) => b.value - a.value);

  return result;
};
