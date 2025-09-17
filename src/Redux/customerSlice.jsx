import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCustomersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCustomersSuccess: (state, action) => {
      state.loading = false;

      const localCustomers = state.list.filter((c) => c.local);

      const apiCustomers = action.payload.map((c) => ({
        ...c,
        local: false,
      }));

      state.list = [...localCustomers, ...apiCustomers];
    },
    fetchCustomersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCustomer: (state, action) => {
      state.list.unshift({
        key: `local-${Date.now()}`,
        ...action.payload,
        local: true,
      });
    },
    editCustomer: (state, action) => {
      const { key, updatedData } = action.payload;
      const strKey = String(key);
      state.list = state.list.map((c) =>
        String(c.key) === strKey ? { ...c, ...updatedData } : c
      );
    },
    deleteCustomerRequest: (state, action) => {
      state.loading = true;
      // Optimistically remove the customer so UI updates immediately
      state.list = state.list.filter(
        (c) => String(c.key) !== String(action.payload)
      );
    },
    deleteCustomerSuccess: (state, action) => {
      state.loading = false;
      // Ensure comparison is type-safe by normalizing to strings
      state.list = state.list.filter(
        (c) => String(c.key) !== String(action.payload)
      );
    },
    deleteCustomerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCustomersRequest,
  fetchCustomersSuccess,
  fetchCustomersFailure,
  addCustomer,
  editCustomer,
  deleteCustomerRequest,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} = customerSlice.actions;

export default customerSlice.reducer;