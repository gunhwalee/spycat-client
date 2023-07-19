import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrafficState } from "../types/state";

type Payload = Omit<TrafficState, "apikey">;

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
    saveData(state, action: PayloadAction<Payload>) {
      state.serverName = action.payload.serverName;
      state.url = action.payload.url;
      state.traffics = action.payload.traffics;
      state.errorLists = action.payload.errorLists;
      state.selectDate = null;
    },
    selectDay(state, action: PayloadAction<Payload>) {
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
