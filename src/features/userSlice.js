import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  apikey: null,
  id: null,
  servers: [],
  toApi: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.apikey = action.payload.apikey;
      state.id = action.payload.id;
    },
    setServers(state, action) {
      state.servers = action.payload.servers;
    },
    updateKey(state, action) {
      state.apikey = action.payload.apikey;
    },
    deleteUser(state) {
      state.name = null;
      state.apikey = null;
      state.id = null;
      state.servers = [];
    },
    setAxios(state) {
      state.toApi = !state.toApi;
    },
  },
});

export const { setUser, deleteUser, setServers, updateKey, setAxios } =
  userSlice.actions;
export default userSlice.reducer;
