import { ISagaModule } from 'redux-dynamic-modules-saga'

import { peopleReducer, peopleRootSaga } from './'

export const getPeopleModule = (): ISagaModule<typeof peopleReducer> => ({
  id: 'people',
  reducerMap: {
    people: peopleReducer,
  },
  sagas: [peopleRootSaga],
})
