import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: false,
  id: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
