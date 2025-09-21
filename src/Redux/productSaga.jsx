
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";

const fetchProductsApi = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

function* fetchProductsWorker() {
  try {
    const products = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* productSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProductsWorker);
}
