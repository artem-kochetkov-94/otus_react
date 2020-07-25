export * from './People'
export * from './PeopleContainer'
export * from './types'
export * from './reducer'
export * from './module'

import { fork } from 'redux-saga/effects'
import { fetchPeopleWatcher } from './sagas'

export function* peopleRootSaga() {
  yield fork(fetchPeopleWatcher)
}
