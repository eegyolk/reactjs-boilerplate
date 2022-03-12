import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../reducers/userActionTypes';
import { handleGetUser } from './handlers/user';

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
