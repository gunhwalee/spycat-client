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
