export interface ErrorData {
  dailyError: ErrorCount[],
  routesError: ErrorCount[],
  errorTime: ErrorCount[]
}

export type DailyErrorData = Omit<ErrorData, "dailyError">;

export interface ErrorCount {
  name: number | string,
  value: number,
}

export interface TrafficData {
  dailyTraffic: ErrorCount[],
  routesTraffic: ErrorCount[],
  timeTraffic: ErrorCount[]
}

export type DailyTrafficData = Omit<TrafficData, "dailyTraffic">;
