import { History } from 'history'

export interface InitialState {
  data: null | User
  isAuthorized: boolean
  isAuthorizationLoading: boolean
  isLogoutLoading: boolean
}

export interface User {
  login: string
}

export interface LoginRequestPayload {
  login: string
  history: History
}

export interface LoginSuccessPayload {
  user: User
}

export interface LogoutRequestPayload {
  history: History
}
