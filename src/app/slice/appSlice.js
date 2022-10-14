import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    navbar: false,
    indexHero: 0,
  },
  reducers: {
    setNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    setIndexHero: (state, action) => {
      state.indexHero = action.payload;
    },
  },
});

export const { setNavbar, setIndexHero } = appSlice.actions;
export default appSlice.reducer;
