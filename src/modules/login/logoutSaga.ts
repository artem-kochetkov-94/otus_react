import { put, takeEvery } from 'redux-saga/effects'
import { userActions } from './'

export function* logout() {
  yield localStorage.removeItem('login')
  yield put(userActions.logoutSuccess())
}

export function* logoutWatcher() {
  yield takeEvery(userActions.logoutRequest.type, logout)
}
