import { createSlice } from "@reduxjs/toolkit";
import MockData from "../utils/MockData";

const initialState = MockData;

const trafficSlice = createSlice({
  name: "traffic",
  initialState,
  reducers: {
    setData(state, action) {
      state.serverName = action.payload.serverName;
      state.url = action.payload.url;
      state.traffics = action.payload.traffics;
      state.errorLists = action.payload.errorLists;
      state.selectDate = null;
    },
    selectDay(state, action) {
      state.selectDate = action.payload.selectDate;
    },
  },
});

export const { setData, selectDay } = trafficSlice.actions;
export default trafficSlice.reducer;
