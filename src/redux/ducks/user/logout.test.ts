import { expectSaga } from 'redux-saga-test-plan'
import { logout } from './'
import { userReducer, userActions } from './'

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
