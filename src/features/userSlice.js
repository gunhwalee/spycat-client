import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  id: null,
  _id: null,
  servers: [],
  toApi: false,
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
    setAxios(state) {
      state.toApi = !state.toApi;
    },
  },
});

export const { setUser, deleteUser, setServers, setAxios } = userSlice.actions;
export default userSlice.reducer;
