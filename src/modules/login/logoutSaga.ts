import { put, takeEvery } from 'redux-saga/effects'
import { loginActions } from './'

export function* logout() {
  yield localStorage.removeItem('login')
  yield put(loginActions.logoutSuccess())
}

export function* logoutWatcher() {
  yield takeEvery(loginActions.logoutRequest.type, logout)
}
