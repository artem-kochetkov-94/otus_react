import { combineReducers } from '@reduxjs/toolkit'
import { peopleReducer } from 'src/modules/people'
import { userReducer, userRootSaga } from 'src/modules/login'
import { fork } from 'redux-saga/effects'

export const rootReducer = combineReducers({
  people: peopleReducer,
  user: userReducer,
})

export function* rootSaga() {
  yield fork(userRootSaga)
}
