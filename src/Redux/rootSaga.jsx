import { all } from "redux-saga/effects";
import customerSaga from "./customerSaga";


export default function* rootSaga() {
  yield all([
    customerSaga(),
    
  ]);
}
