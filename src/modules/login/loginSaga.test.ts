import { expectSaga } from 'redux-saga-test-plan'
import { loginReducer, loginActions, fetchUser } from './'

const history = {
  push: jest.fn(),
}

describe('Login saga', () => {
  it('login success', () => {
    const userName = 'Username'
    return expectSaga(fetchUser, {
      type: loginActions.loginRequest.type,
      payload: {
        login: userName,
        history,
      },
    })
      .withReducer(loginReducer)
      .hasFinalState({
        data: {
          login: userName,
        },
        isAuthorized: true,
        isAuthorizationLoading: false,
        isLogoutLoading: false,
      })
      .run()
  })
  it('login fail', () => {
    const userName = ''
    return expectSaga(fetchUser, {
      type: loginActions.loginRequest.type,
      payload: {
        login: userName,
        history,
      },
    })
      .withReducer(loginReducer)
      .hasFinalState({
        data: null,
        isAuthorized: false,
        isAuthorizationLoading: false,
        isLogoutLoading: false,
      })
      .run()
  })
})
