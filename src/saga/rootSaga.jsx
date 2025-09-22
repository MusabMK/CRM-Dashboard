import { all } from "redux-saga/effects";
import customerSaga from "./customerSaga";
import productSaga from "./productSaga";
import incomeSaga from "./incomeSaga";

export default function* rootSaga() {
  yield all([customerSaga(), productSaga(), incomeSaga()]);
}
