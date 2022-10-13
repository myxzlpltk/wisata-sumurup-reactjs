import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    navbar: false,
    indexCard: 0,
  },
  reducers: {
    setNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    nextCard: (state) => {
      state.indexCard++;
    },
  },
});

export const { setNavbar, nextCard } = appSlice.actions;
export default appSlice.reducer;
