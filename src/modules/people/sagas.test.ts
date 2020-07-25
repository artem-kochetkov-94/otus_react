import { testSaga } from 'redux-saga-test-plan'

import {
  peopleActions,
  fetchPeopleWatcher,
  fetchPeople,
  fetchPeopleSaga,
  Person,
} from './'

describe('people Saga', () => {
  describe('fetchPeople success', () => {
    // it('fetchPeople default flow success', () => {
    //   const saga = testSaga(fetchPeopleWatcher)
    //   const fetchPeopleResult: Person[] | [] = []

    //   saga
    //     .next()
    //     .takeEvery(peopleActions.fetchPeopleRequest.type, fetchPeopleSaga)
    //     .next()
    //     .put(peopleActions.fetchPeopleRequest())
    //     .next()
    //     .call(fetchPeople)
    //     .next(fetchPeopleResult)
    //     .put(peopleActions.fetchPeopleSuccess(fetchPeopleResult))
    //     .finish()
    // })
    it('fetchPeople default flow success', () => {
      const saga = testSaga(fetchPeopleSaga)
      const fetchPeopleResult: Person[] | [] = []

      saga
        .next()
        .call(fetchPeople)
        .next(fetchPeopleResult)
        .put(peopleActions.fetchPeopleSuccess(fetchPeopleResult))
        .finish()
    })
    it('fetchPeople default flow failure', () => {
      const saga = testSaga(fetchPeopleSaga)

      saga
        .next()
        .call(fetchPeople)
        .throw(new Error('ошибка запроса'))
        .put(peopleActions.fetchPeopleFailure())
        .finish()
    })
  })
})
