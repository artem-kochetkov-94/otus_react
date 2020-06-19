import { combineReducers } from '@reduxjs/toolkit'
import { peopleReducer } from './people'
import { userReducer, userRootSaga } from './user'
import { all, fork } from 'redux-saga/effects'

export const rootReducer = combineReducers({
  people: peopleReducer,
  user: userReducer,
})

export function* rootSaga() {
  yield all([fork(userRootSaga)])
}
