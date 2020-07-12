import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPeople = createAsyncThunk('people/fetch', async () => {
  const data = await fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then(({ results }) => results)
  return data
})
