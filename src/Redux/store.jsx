import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./themeSlice";
import customerReducer from "./customerSlice";
import incomeReducer from "./incomeSlice"; 
import rootSaga from "./rootSaga";           
import productReducer from "./productSlice"; 
import selectedProductsReducer from "./selectedProductsSlice"

const sagaMiddleware = createSagaMiddleware();
const logger = (store) => (next) => (action) => {
  console.log("🚀 Dispatched:", action.type, action.payload);
  return next(action);
};
const store = configureStore({
  reducer: {
    theme: themeReducer,
    customers: customerReducer,
    income: incomeReducer, 
    products: productReducer,
    selectedProducts: selectedProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
