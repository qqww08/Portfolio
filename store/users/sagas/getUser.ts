import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { actionTypes, getUserSuccess, getUserFail } from "../actions/getUser";
import { SagaIterator } from "redux-saga";
function* getUser(action): SagaIterator {
  try {
    const res: AxiosResponse = yield call(() =>
      axios.get(`/api/users`).then((res) => {
        return res;
      })
    );
    yield put(getUserSuccess(res));
  } catch (err) {
    yield put(getUserFail(err));
  }
}
function* getUserSaga(): SagaIterator {
  yield takeLatest(actionTypes.GET_USER, getUser);
}
export default getUserSaga;
