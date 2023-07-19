export interface TrafficState {
  serverName: string | null,
  url: string | null,
  traffics: Traffics[] | null,
  errorLists: Errors[] | null,
  selectDate: string | null,
  apikey: string | null,
}

export interface Traffics {
  createdAt: string,
  expiredAt: string,
  host: string,
  path: string,
  server: string,
  _id: string,
}

export interface Errors extends Traffics {
  errorMessage: string,
  errorName: string,
  errorStack: string,
}

export interface UserState {
  name: string | null,
  id: string | null,
  _id: string | null,
  servers: ServerInfo[],
}

export interface ServerInfo {
  apikey: string,
  serverName: string,
  url: string,
  _id: string,
  traffics: string[],
  errorLists: string[],
}
