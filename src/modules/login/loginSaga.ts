import { put, takeEvery, call } from 'redux-saga/effects'
import { userActions, LoginRequestPayload } from './'
import { PayloadAction } from '@reduxjs/toolkit'

export function* fetchUser(action: PayloadAction<LoginRequestPayload>) {
  const { login, history } = action.payload

  try {
    if (login) {
      yield localStorage.setItem('login', login)
      yield put(
        userActions.loginSuccess({
          user: { login },
        }),
      )
      yield call(history.push, `/`)
    } else {
      yield put(userActions.loginFailure())
    }
  } catch (e) {
    yield put(userActions.loginFailure())
  }
}

export function* loginWatcher() {
  yield takeEvery(userActions.loginRequest.type, fetchUser)
}
