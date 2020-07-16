import { put, takeEvery, call } from 'redux-saga/effects'
import { loginActions, LoginRequestPayload } from './'
import { PayloadAction } from '@reduxjs/toolkit'

export function* fetchUser(action: PayloadAction<LoginRequestPayload>) {
  const { login, history } = action.payload

  try {
    if (login) {
      yield localStorage.setItem('login', login)
      yield put(
        loginActions.loginSuccess({
          user: { login },
        }),
      )
      yield call(history.push, `/`)
    } else {
      yield put(loginActions.loginFailure())
    }
  } catch (e) {
    yield put(loginActions.loginFailure())
  }
}

export function* loginWatcher() {
  yield takeEvery(loginActions.loginRequest.type, fetchUser)
}
