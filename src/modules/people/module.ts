import { peopleReducer, fetchPeople } from './'

export const getPeopleModule = () => ({
  id: 'people',
  reducerMap: {
    people: peopleReducer,
  },
  thunks: [fetchPeople],
})
