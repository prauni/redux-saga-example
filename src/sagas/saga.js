//import { delay } from "redux-saga"; //In the 0.x version you should import it as:
import { takeLatest, put, delay } from "redux-saga/effects";//In the 1.0.0 version you can use it as mentioned in the docs.

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
