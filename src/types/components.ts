export interface InputComponentProps {
  path?: string,
  id: string,
  placeholder: string,
  inputHandler: Function,
  setFocus: Function,
  focus: boolean,
  rule: string,
}

export interface UserInfo {
  id: string | null,
  pw: string | null,
}

export interface ServerInfo {
  serverName: string | null,
  url: string | null,
}

export interface ErrorButtonList {
  name: string,
  value: number,
}

export interface ChartProps {
  name: string,
  data: [],
  width: number,
  height: number,
}
