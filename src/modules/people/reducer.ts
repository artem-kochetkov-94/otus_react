import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { PeopleInitialState, Person } from './'
import { fetchPeople } from './thunks'
import type { AppState } from 'rdx/index'

const initialState: PeopleInitialState = {
  isFetching: false,
  isFetched: false,
  data: [],
}

export const isFetching = createSelector(
  (state: AppState) => state.people.isFetching,
  (isFetching) => isFetching,
)

export const isFetched = createSelector(
  (state: AppState) => state.people.isFetching,
  (isFetched) => isFetched,
)

export const getPeople = createSelector(
  (state: AppState) => state.people.data,
  (people) => people,
)

export const peopleSelectors = {
  isFetching,
  isFetched,
  getPeople,
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPeople.pending.toString()]: (state, action) => {
      state.isFetching = true
      state.isFetched = false
      return state
    },
    [fetchPeople.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Person[] | []>,
    ) => {
      state.isFetching = false
      state.isFetched = true
      state.data = payload
      return state
    },
    [fetchPeople.rejected.toString()]: (state, action) => {
      state.isFetching = false
      state.isFetched = false
      return state
    },
  },
})

export const peopleReducer = peopleSlice.reducer
export const peopleActions = peopleSlice.actions
