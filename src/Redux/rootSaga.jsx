import { all } from "redux-saga/effects";
import customerSaga from "./customerSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([
    customerSaga(),
    productSaga(), 
  ]);
}
