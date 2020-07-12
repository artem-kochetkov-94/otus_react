import { ISagaModule } from 'redux-dynamic-modules-saga'

import { loginReducer, loginRootSaga } from './'

export const getLoginModule = (): ISagaModule<typeof loginReducer> => ({
  id: 'login',
  reducerMap: {
    login: loginReducer,
  },
  sagas: [loginRootSaga],
})
