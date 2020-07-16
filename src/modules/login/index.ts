export * from './login'
export * from './logout'
export { LoginContainer } from './loginContainer'
export { LogoutContainer } from './logoutContainer'
export { AuthorizedOnlyContainer } from './authorizedOnlyContainer'
export * from './types'
export * from './reducer'
export * from './loginSaga'
export * from './logoutSaga'
export * from './module'

import { fork, all } from 'redux-saga/effects'
import { loginWatcher } from './loginSaga'
import { logoutWatcher } from './logoutSaga'

export function* loginRootSaga() {
  yield all([fork(loginWatcher), fork(logoutWatcher)])
}
