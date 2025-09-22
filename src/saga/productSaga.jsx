import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProductsApi } from "./api";
import { fetchProductsSuccess, fetchProductsFailure } from "../store/actions";

function* fetchProductsWorker() {
  try {
    const products = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message || "Unknown error"));
  }
}

export default function* productSaga() {
  yield takeLatest("FETCH_PRODUCTS_REQUEST", fetchProductsWorker);
}
