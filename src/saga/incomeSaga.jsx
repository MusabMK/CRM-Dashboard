import { call, put, takeLatest } from "redux-saga/effects";
import { fetchIncomeApi } from "./api";
import { fetchIncomeSuccess, fetchIncomeFailure } from "../store/actions";

function* fetchIncomeWorker() {
  try {
    const income = yield call(fetchIncomeApi);
    yield put(fetchIncomeSuccess(income));
  } catch (error) {
    yield put(fetchIncomeFailure(error.message || "Unknown error"));
  }
}

export default function* incomeSaga() {
  yield takeLatest("FETCH_INCOME_REQUEST", fetchIncomeWorker);
}
