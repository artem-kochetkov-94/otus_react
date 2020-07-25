import React from 'react'
import { ReduxToProps } from './PeopleContainer'
import { Person } from './'

type PeopleProps = ReduxToProps

export const People: React.FC<PeopleProps> = ({
  isFetching,
  isFetched,
  people,
  fetchPeopleRequest,
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
        <button onClick={() => fetchPeopleRequest()}>Fetch people</button>
      </>
    )

  return <button onClick={() => fetchPeopleRequest()}>Fetch people</button>
}
