export * from './types'
export * from './reducer'
export * from './login'
export * from './logout'

import { fork, all } from 'redux-saga/effects'
import { loginWatcher } from './login'
import { logoutWatcher } from './logout'

export function* userRootSaga() {
  yield all([fork(loginWatcher), fork(logoutWatcher)])
}
