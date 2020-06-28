import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialState, LoginSuccessPayload } from './'
import { createSelector } from '@reduxjs/toolkit'
import type { AppState } from 'rdx/index'

export const initialState: InitialState = {
  data: null,
  isAuthorized: false,
  isAuthorizationLoading: false,
  isLogoutLoading: false,
}

const getUser = createSelector(
  (state: AppState) => state.user.data,
  (user) => user,
)

const isAuthorized = createSelector(
  (state: AppState) => state.user.isAuthorized,
  (isAuthorized) => isAuthorized,
)

const isAuthorizationLoading = createSelector(
  (state: AppState) => state.user.isAuthorizationLoading,
  (isAuthorizationLoading) => isAuthorizationLoading,
)

const isLogoutLoading = createSelector(
  (state: AppState) => state.user.isLogoutLoading,
  (isLogoutLoading) => isLogoutLoading,
)

export const userSelectors = {
  getUser,
  isAuthorized,
  isAuthorizationLoading,
  isLogoutLoading,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isAuthorizationLoading = true
      state.isAuthorized = false
      return state
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      const {
        payload: { user },
      } = action
      state.isAuthorizationLoading = false
      state.isAuthorized = true
      state.data = user
      return state
    },
    loginFailure: (state) => {
      state.isAuthorizationLoading = false
      state.isAuthorized = false
      return state
    },
    logoutRequest: (state) => {
      state.isLogoutLoading = true
      return state
    },
    logoutSuccess: (state) => {
      state.isLogoutLoading = false
      state.isAuthorized = false
      state.data = null
      return state
    },
    logoutFailure: (state) => {
      state.isLogoutLoading = false
      return state
    },
  },
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
