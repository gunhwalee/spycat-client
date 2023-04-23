import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serverName: null,
  url: null,
  traffics: null,
  errorLists: null,
  selectDate: null,
};

const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    saveData(state, action) {
      state.serverName = action.payload.serverName;
      state.url = action.payload.url;
      state.traffics = action.payload.traffics;
      state.errorLists = action.payload.errorLists;
      state.selectDate = null;
    },
    selectDay(state, action) {
      state.selectDate = action.payload.selectDate;
    },
    deleteData(state) {
      state.serverName = null;
      state.url = null;
      state.traffics = null;
      state.errorLists = null;
      state.selectDate = null;
    },
  },
});

export const { saveData, selectDay, deleteData } = serverSlice.actions;
export default serverSlice.reducer;
