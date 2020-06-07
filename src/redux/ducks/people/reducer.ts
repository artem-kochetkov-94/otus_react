import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PeopleInitialState, Person } from './'
import { fetchPeople } from './thunks'

const initialState: PeopleInitialState = {
  isFetching: false,
  isFetched: false,
  data: [],
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
