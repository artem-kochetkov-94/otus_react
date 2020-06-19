import { put, takeEvery, delay, call } from 'redux-saga/effects'
import * as userActions from '../actions'

function* logout() {
  yield delay(1000)
  yield localStorage.removeItem('login')
  yield put(userActions.logoutSuccess())
}

export function* logoutWatcher() {
  yield takeEvery(userActions.logoutRequest.type, logout)
}
