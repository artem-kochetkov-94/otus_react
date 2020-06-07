import React from 'react'
import { ReduxToProps } from './PeopleScreenContainer'
import { Person } from 'rdx/ducks/people'

type PeopleScreenProps = ReduxToProps

export const PeopleScreen: React.FC<PeopleScreenProps> = ({
  isFetching,
  isFetched,
  people,
  fetchPeople,
}) => {
  if (isFetching) {
    return <p>Loading...</p>
  }

  if (isFetched || people)
    return (
      <>
        {people &&
          people.map((person: Person) => (
            <p key={person.name}>{person.name}</p>
          ))}
        <button onClick={() => fetchPeople()}>Fetch people</button>
      </>
    )

  return <button onClick={() => fetchPeople()}>Fetch people</button>
}
