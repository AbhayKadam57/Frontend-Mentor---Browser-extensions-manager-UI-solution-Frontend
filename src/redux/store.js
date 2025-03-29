import { configureStore } from "@reduxjs/toolkit";
import extensionReducer from "./extensionSlice";

export const store = configureStore({
  reducer: {
    extension: extensionReducer,
  },
});
