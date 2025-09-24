import { createSlice } from "@reduxjs/toolkit";

const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState: {
    list: [],
  },
  reducers: {
    addProductToList: (state, action) => {
      const product = action.payload;
      
      if (!state.list.find((p) => p.id === product.id)) {
        state.list.push(product);
      }
    },
    removeProductFromList: (state, action) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
    clearProductsList: (state) => {
      state.list = [];
    },
  },
});

export const { 
  addProductToList,
   removeProductFromList,
   clearProductsList,
   } =
  selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;
