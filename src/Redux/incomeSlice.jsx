// import { createSlice } from "@reduxjs/toolkit";

// const incomeSlice = createSlice({
//   name: "income",
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     fetchIncomeRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchIncomeSuccess: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     fetchIncomeFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchIncomeRequest, fetchIncomeSuccess, fetchIncomeFailure } =
//   incomeSlice.actions;

// export default incomeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchIncomeRequest: (state) => {
      state.loading = false;
      state.error = null;

    
      state.data = [
        { date: "2025-01", income: 1200 },
        { date: "2025-02", income: 1500 },
        { date: "2025-03", income: 1000 },
        { date: "2025-04", income: 1800 },
        { date: "2025-05", income: 2200 },
        { date: "2025-06", income: 2000 },
        { date: "2025-07", income: 2500 },
        { date: "2025-08", income: 2700 },
        { date: "2025-09", income: 2300 },
        { date: "2025-10", income: 3000 },
      ];
    },
  },
});

export const { fetchIncomeRequest } = incomeSlice.actions;
export default incomeSlice.reducer;
