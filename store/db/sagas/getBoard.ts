import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  actionTypes,
  getBoardSuccess,
  getBoardFail,
} from "../actions/getBoard";
import { SagaIterator } from "redux-saga";
function* getBoard(action): SagaIterator {
  try {
    const res: AxiosResponse = yield call(() =>
      axios.get(`/api/board`).then((res) => {
        return res;
      })
    );
    yield put(getBoardSuccess(res.data.data));
  } catch (err) {
    yield put(getBoardFail(err));
  }
}
function* getBoardSaga(): SagaIterator {
  yield takeLatest(actionTypes.GET_BOARD, getBoard);
}
export default getBoardSaga;
