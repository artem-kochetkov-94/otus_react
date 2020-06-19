import { put, takeEvery, delay, call } from 'redux-saga/effects'
import * as userActions from '../actions'
import { PayloadAction } from '@reduxjs/toolkit'
import { LoginRequestPayload } from '../'

function* fetchUser(action: PayloadAction<LoginRequestPayload>) {
  const { login, history } = action.payload

  try {
    yield delay(1000)
    yield localStorage.setItem('login', login)
    yield put(
      userActions.loginSuccess({
        user: { login },
      }),
    )
    yield call(history.push, `/`)
  } catch (e) {
    yield put(userActions.loginFailure())
  }
}

export function* loginWatcher() {
  yield takeEvery(userActions.loginRequest.type, fetchUser)
}
