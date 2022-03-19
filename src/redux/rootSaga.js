import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../Pages/Portfolio/reducer/actionTypes';
import { handleGetUser } from '../Pages/Portfolio/saga/handlers';

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
