import { fork, all } from 'redux-saga/effects'
import { loginWatcher } from './login'
import { logoutWatcher } from './logout'

export function* userRootSaga() {
  yield all([fork(loginWatcher), fork(logoutWatcher)])
}
