import { createSelector } from '@reduxjs/toolkit'
import type { AppState } from 'rdx/index'

export const getUser = createSelector(
  (state: AppState) => state.user.data,
  (user) => user,
)

export const isAuthorized = createSelector(
  (state: AppState) => state.user.isAuthorized,
  (isAuthorized) => isAuthorized,
)

export const isAuthorizationLoading = createSelector(
  (state: AppState) => state.user.isAuthorizationLoading,
  (isAuthorizationLoading) => isAuthorizationLoading,
)

export const isLogoutLoading = createSelector(
  (state: AppState) => state.user.isLogoutLoading,
  (isLogoutLoading) => isLogoutLoading,
)
