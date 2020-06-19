import { createAction } from '@reduxjs/toolkit'
import { LoginSuccessPayload, LoginRequestPayload } from './'

export const loginRequest = createAction<LoginRequestPayload>(
  'user/loginRequest',
)
export const loginSuccess = createAction<LoginSuccessPayload>(
  'user/loginSuccess',
)
export const loginFailure = createAction('user/loginFailure')

export const logoutRequest = createAction('user/logoutRequest')
export const logoutSuccess = createAction('user/logoutSuccess')
export const logoutFailure = createAction('user/logoutFailure')
