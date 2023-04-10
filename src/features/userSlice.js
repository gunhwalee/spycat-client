import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: false,
  apikey: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.apikey = action.payload.apikey;
    },
    deleteUser(state) {
      state.name = false;
      state.apikey = false;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
