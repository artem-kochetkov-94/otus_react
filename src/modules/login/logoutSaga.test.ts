import { expectSaga } from 'redux-saga-test-plan'
import { userReducer, userActions, logout } from './'

const history = {
  push: jest.fn(),
}

describe('logout saga', () => {
  it('logout success', () => {
    return expectSaga(logout, {
      type: userActions.logoutRequest.type,
    })
      .withReducer(userReducer)
      .hasFinalState({
        data: null,
        isAuthorized: false,
        isAuthorizationLoading: false,
        isLogoutLoading: false,
      })
      .run()
  })
})
