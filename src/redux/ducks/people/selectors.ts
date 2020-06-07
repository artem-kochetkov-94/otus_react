import { createSelector } from '@reduxjs/toolkit'
import type { AppState } from 'rdx/index'

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
