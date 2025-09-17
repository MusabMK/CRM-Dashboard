import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { 
    darkMode: false,
    collapsed: false, 
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleCollapse: (state) => {
      state.collapsed = !state.collapsed; 
    },
  },
});

export const { toggleTheme, toggleCollapse } = themeSlice.actions;
export default themeSlice.reducer;