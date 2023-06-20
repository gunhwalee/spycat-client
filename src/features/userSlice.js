import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  id: null,
  _id: null,
  servers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.id = action.payload.id;
    },
    setServers(state, action) {
      state.servers = action.payload.servers;
    },
    deleteUser(state) {
      state.name = null;
      state._id = null;
      state.id = null;
      state.servers = [];
    },
    addServer(state, action) {
      state.servers = [...state.servers, action.payload.server];
    },
  },
});

export const { setUser, deleteUser, setServers, addServer } = userSlice.actions;
export default userSlice.reducer;
