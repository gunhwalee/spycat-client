import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useMock: true,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    selectServer(state) {
      state.useMock = false;
    },
  },
});

export const { selectServer } = routeSlice.actions;
export default routeSlice.reducer;
