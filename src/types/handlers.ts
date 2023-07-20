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
