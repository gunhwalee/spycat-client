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
    deleteUser(state) {
      state.name = false;
      state.id = false;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
