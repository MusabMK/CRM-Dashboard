import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCustomersApi } from "./api";
import {
  fetchCustomersSuccess,
  fetchCustomersFailure,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} from "../store/actions";

function* fetchCustomersWorker() {
  try {
    const customers = yield call(fetchCustomersApi);
    yield put(fetchCustomersSuccess(customers));
  } catch (error) {
    yield put(fetchCustomersFailure(error.message || "Unknown error"));
  }
}

function* deleteCustomerWorker(action) {
  try {
    yield put(deleteCustomerSuccess(action.payload));
  } catch (error) {
    yield put(deleteCustomerFailure(error.message || "Unknown error"));
  }
}

export default function* customerSaga() {
  yield takeLatest("FETCH_CUSTOMERS_REQUEST", fetchCustomersWorker);
  yield takeLatest("DELETE_CUSTOMER_REQUEST", deleteCustomerWorker);
}
