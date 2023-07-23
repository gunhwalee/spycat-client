import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, ServerInfo } from "../types/state";

const initialState: UserState = {
  name: null,
  id: null,
  _id: null,
  servers: [],
};

type InputPayload = Omit<UserState, "servers">;
type ServersPayload = Pick<UserState, "servers">;
type ServerPayload = {
  server: ServerInfo
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InputPayload>) {
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.id = action.payload.id;
    },
    setServers(state, action: PayloadAction<ServersPayload>) {
      state.servers = action.payload.servers;
    },
    deleteUser(state) {
      state.name = null;
      state._id = null;
      state.id = null;
      state.servers = [];
    },
    addServer(state, action: PayloadAction<ServerPayload>) {
      state.servers = [...state.servers, action.payload.server];
    },
  },
});

export const { setUser, deleteUser, setServers, addServer } = userSlice.actions;
export default userSlice.reducer;
