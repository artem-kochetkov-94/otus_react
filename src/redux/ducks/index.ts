import { combineReducers } from '@reduxjs/toolkit'
import { peopleReducer } from './people'

export const rootReducer = combineReducers({
  people: peopleReducer,
})
