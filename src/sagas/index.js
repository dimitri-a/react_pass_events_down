import { put, call, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";

export function* incrementAsync() {
  yield call(delay, 1000);
  console.log("saga incrementsync");
  yield put({ type: "INCREMENT" });
}

export function* decrementAsync() {
  yield call(delay, 1000);
  console.log("saga decrementsync");
  yield put({ type: "DECREMENT" });
}

export default function* rootSaga() {
  console.log("rootsaga");
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}
