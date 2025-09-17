import { call, put, takeLatest } from "redux-saga/effects";
import { fetchIncomeRequest, fetchIncomeSuccess, fetchIncomeFailure } from "./incomeSlice";

// Example API call
//const fetchIncomeApi = async () => {
//  const res = await fetch("https://mocki.io/v1/8c8b7bc2-2e09-4ef3-bc76-61e90f3a3edb");
//  if (!res.ok) throw new Error("Failed to fetch income data");
//  return res.json();
//};

function* fetchIncomeSaga() {
  try {
    const data = yield call(fetchIncomeApi);
    yield put(fetchIncomeSuccess(data));
  } catch (error) {
    yield put(fetchIncomeFailure(error.message));
  }
}

export default function* incomeSaga() {
  yield takeLatest(fetchIncomeRequest.type, fetchIncomeSaga);
}