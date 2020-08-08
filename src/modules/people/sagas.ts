import { put, takeEvery, call, fork } from 'redux-saga/effects'
import { peopleActions } from './'

export function fetchPeople() {
  return fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then(({ results }) => results)
    .catch((error) => {
      throw new Error(error.message)
    })
}

export function* fetchPeopleSaga() {
  try {
    const data = yield call(fetchPeople)
    yield put(peopleActions.fetchPeopleSuccess(data))
  } catch {
    yield put(peopleActions.fetchPeopleFailure())
  }
}

export function* fetchPeopleWatcher() {
  yield takeEvery(peopleActions.fetchPeopleRequest.type, fetchPeopleSaga)
}

export function* peopleRootSaga() {
  yield fork(fetchPeopleWatcher)
}
