import { userActions, userReducer, initialState } from './'

describe('User reducer', () => {
  const username = 'Artem'
  it('Correct loginRequest action', () => {
    expect(userReducer(initialState, userActions.loginRequest())).toEqual({
      ...initialState,
      isAuthorized: false,
      isAuthorizationLoading: true,
    })
  })
  it('Correct loginSuccess action', () => {
    expect(
      userReducer(
        initialState,
        userActions.loginSuccess({ user: { login: username } }),
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
    expect(userReducer(initialState, userActions.loginFailure())).toEqual({
      ...initialState,
      isAuthorizationLoading: false,
      isAuthorized: false,
    })
  })

  it('Correct loginRequest action', () => {
    expect(userReducer(initialState, userActions.logoutRequest())).toEqual({
      ...initialState,
      isLogoutLoading: true,
    })
  })
  it('Correct loginSuccess action', () => {
    expect(userReducer(initialState, userActions.logoutSuccess())).toEqual({
      ...initialState,
      isLogoutLoading: false,
      isAuthorized: false,
      data: null,
    })
  })
  it('Correct loginFailure action', () => {
    expect(userReducer(initialState, userActions.logoutFailure())).toEqual({
      ...initialState,
      isLogoutLoading: false,
    })
  })
})
