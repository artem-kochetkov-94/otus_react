import { put, takeEvery, call } from 'redux-saga/effects'
import { peopleActions } from './'

function fetchPeople() {
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
  yield takeEvery(peopleActions.fetchPeopleRequest, fetchPeople)
}
