import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as userAllActions from './actions'
import { InitialState, LoginSuccessPayload } from './'

const initialState: InitialState = {
  data: null,
  isAuthorized: false,
  isAuthorizationLoading: false,
  isLogoutLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userAllActions.loginRequest, (state, action) => {
      state.isAuthorizationLoading = true
      state.isAuthorized = false
      return state
    }),
      builder.addCase(
        userAllActions.loginSuccess,
        (state, action: PayloadAction<LoginSuccessPayload>) => {
          const {
            payload: { user },
          } = action
          state.isAuthorizationLoading = false
          state.isAuthorized = true
          state.data = user
          return state
        },
      ),
      builder.addCase(userAllActions.loginFailure, (state, action) => {
        state.isAuthorizationLoading = false
        state.isAuthorized = false
        return state
      }),
      builder.addCase(userAllActions.logoutRequest, (state, action) => {
        state.isLogoutLoading = true
        return state
      }),
      builder.addCase(userAllActions.logoutSuccess, (state, action) => {
        state.isLogoutLoading = false
        state.isAuthorized = false
        state.data = null
        return state
      }),
      builder.addCase(userAllActions.logoutFailure, (state, action) => {
        state.isLogoutLoading = false
        return state
      })
  },
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
