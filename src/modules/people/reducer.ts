import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { PeopleInitialState, Person } from './'
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
  reducers: {
    fetchPeopleRequest: (state) => {
      state.isFetching = true
      state.isFetched = false
      return state
    },
    fetchPeopleSuccess: (state, { payload }: PayloadAction<Person[] | []>) => {
      state.isFetching = false
      state.isFetched = true
      state.data = payload
      return state
    },
    fetchPeopleFailure: (state) => {
      state.isFetching = false
      state.isFetched = false
      return state
    },
  },
  extraReducers: {},
})

export const peopleReducer = peopleSlice.reducer
export const peopleActions = peopleSlice.actions
