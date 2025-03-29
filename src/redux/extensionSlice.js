import { createSlice, current } from "@reduxjs/toolkit";

export const ExtensionSlice = createSlice({
  name: "extension",
  initialState: {
    theme: "light",
    extensionData: [],
    loading: false,
    error: false,
    currentStatus: {
      id: 0,
      status: "all",
    },
  },
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
    fethExtensionStart: (state) => {
      state.loading = true;
    },
    fetchExtensionSuccess: (state, action) => {
      state.extensionData = action.payload;
      state.loading = false;
      state.error = false;
    },
    fetchExtensionFailed: (state) => {
      state.loading = false;
      state.error = true;
    },

    fetchFilteredExtensions: (state, action) => {
      state.extensionData = action.payload;
    },

    setCurrentStatus: (state, action) => {
      state.currentStatus = action.payload;
    },
  },
});

export const {
  toggleTheme,
  fethExtensionStart,
  fetchExtensionSuccess,
  fetchExtensionFailed,
  fetchFilteredExtensions,
  setCurrentStatus,
} = ExtensionSlice.actions;

export default ExtensionSlice.reducer;
