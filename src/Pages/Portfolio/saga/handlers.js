import { call, put } from 'redux-saga/effects';
import { setUser } from '../reducer/actionTypes';
import { requestGetUser } from './requesters';

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log('Error in handleGetUser', error);
  }
}
