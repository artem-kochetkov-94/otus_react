import { loginActions, loginReducer, initialState } from './'

describe('User reducer', () => {
  const username = 'Artem'
  it('Correct loginRequest action', () => {
    expect(loginReducer(initialState, loginActions.loginRequest())).toEqual({
      ...initialState,
      isAuthorized: false,
      isAuthorizationLoading: true,
    })
  })
  it('Correct loginSuccess action', () => {
    expect(
      loginReducer(
        initialState,
        loginActions.loginSuccess({ user: { login: username } }),
      ),
    ).toEqual({
      ...initialState,
      isAuthorized: true,
      isAuthorizationLoading: false,
      data: {
        login: username,
      },
    })
  })
  it('Correct loginFailure action', () => {
    expect(loginReducer(initialState, loginActions.loginFailure())).toEqual({
      ...initialState,
      isAuthorizationLoading: false,
      isAuthorized: false,
    })
  })

  it('Correct loginRequest action', () => {
    expect(loginReducer(initialState, loginActions.logoutRequest())).toEqual({
      ...initialState,
      isLogoutLoading: true,
    })
  })
  it('Correct loginSuccess action', () => {
    expect(loginReducer(initialState, loginActions.logoutSuccess())).toEqual({
      ...initialState,
      isLogoutLoading: false,
      isAuthorized: false,
      data: null,
    })
  })
  it('Correct loginFailure action', () => {
    expect(loginReducer(initialState, loginActions.logoutFailure())).toEqual({
      ...initialState,
      isLogoutLoading: false,
    })
  })
})
