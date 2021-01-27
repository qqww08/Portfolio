import { all, AllEffect } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import getUserSaga from "~/store/users/sagas/getUser";
export default function* rootSaga(): Generator<AllEffect<SagaIterator>> {
  yield all([getUserSaga()]);
}
