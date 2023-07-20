import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrafficState } from "../types/state";

type ServerPayload = Omit<TrafficState, "apikey" | "selectDate">;
type DatePayload = Pick<TrafficState, "selectDate">

const initialState: TrafficState = {
  serverName: null,
  url: null,
  traffics: null,
  errorLists: null,
  selectDate: null,
  apikey: null,
};

const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    saveData(state, action: PayloadAction<ServerPayload>) {
      state.serverName = action.payload.serverName;
      state.url = action.payload.url;
      state.traffics = action.payload.traffics;
      state.errorLists = action.payload.errorLists;
    },
    selectDay(state, action: PayloadAction<DatePayload>) {
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
