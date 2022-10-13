import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/slice/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
