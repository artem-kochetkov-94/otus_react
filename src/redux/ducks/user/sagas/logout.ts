import { put, takeEvery, delay } from 'redux-saga/effects'
import { userActions } from '../'

function* logout() {
  yield delay(1000)
  yield localStorage.removeItem('login')
  yield put(userActions.logoutSuccess())
}

export function* logoutWatcher() {
  yield takeEvery(userActions.logoutRequest.type, logout)
}
