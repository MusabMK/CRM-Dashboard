import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCustomersRequest,
  fetchCustomersSuccess,
  fetchCustomersFailure,
  deleteCustomerRequest,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} from "./customerSlice";

const fetchCustomersApi = async () => {
  const res = await fetch("https://randomuser.me/api/?results=15");
  if (!res.ok) throw new Error("Failed to fetch customers");
  const data = await res.json();

  return data.results.map((user) => ({
    key: user.login.uuid, 
    name: `${user.name.first} ${user.name.last}`,
    company: user.location?.city || "—",
    phone: user.phone,
    email: user.email,
    country: user.location?.country || "—",
    status: Math.random() > 0.5 ? "Active" : "Inactive",
  }));
};

function* fetchCustomersWorker() {
  try {
    const customers = yield call(fetchCustomersApi);
    yield put(fetchCustomersSuccess(customers));
  } catch (error) {
    yield put(fetchCustomersFailure(error.message));
  }
}

function* deleteCustomerWorker(action) {
  try {
    const customerKey = action.payload;
    
    yield put(deleteCustomerSuccess(customerKey));
  } catch (error) {
    yield put(deleteCustomerFailure(error.message));
  }
}

export default function* customerSaga() {
  yield takeLatest(fetchCustomersRequest.type, fetchCustomersWorker);
  yield takeLatest(deleteCustomerRequest.type, deleteCustomerWorker);
}