import { combineReducers } from '@reduxjs/toolkit'
import { createStore } from 'redux-dynamic-modules'
import { getSagaExtension } from 'redux-dynamic-modules-saga'
import { getThunkExtension } from 'redux-dynamic-modules-thunk'
import { getLoginModule } from 'src/modules/login'
import { peopleReducer } from 'src/modules/people'
import { loginReducer } from 'src/modules/login'

export const store = createStore(
  { extensions: [getSagaExtension({}), getThunkExtension()] },
  getLoginModule(),
)

export const rootReducer = combineReducers({
  people: peopleReducer,
  login: loginReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
