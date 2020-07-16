import { expectSaga } from 'redux-saga-test-plan'
import { loginReducer, loginActions, logout } from './'

const history = {
  push: jest.fn(),
}

describe('logout saga', () => {
  it('logout success', () => {
    return expectSaga(logout, {
      type: loginActions.logoutRequest.type,
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
