import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const logger = (store) => (next) => (action) => {
  // simple logger
  // console.log("🚀 Dispatched:", action.type, action.payload);
  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
