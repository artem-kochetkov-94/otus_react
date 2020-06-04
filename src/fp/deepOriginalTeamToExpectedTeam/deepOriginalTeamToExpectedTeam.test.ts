import { deepOriginalTeamToExpectedTeam } from './'

const originalTeam = {
  name: 'Tampa Bay Roosters',
  captain: {
    name: 'Bryan Downey',
    age: 27,
  },
}

const expectedTeam = {
  name: 'Tampa Bay Roosters',
  captain: {
    name: 'Bryan Downey',
    age: 28,
  },
}

describe('originalArrayToExpectedArray', () => {
  it('originalArrayToExpectedArray works correctly', () => {
    const resultArray = deepOriginalTeamToExpectedTeam(originalTeam)

    expect(resultArray).toEqual(expectedTeam)
    expect(originalTeam).toEqual({
      name: 'Tampa Bay Roosters',
      captain: {
        name: 'Bryan Downey',
        age: 27,
      },
    })
  })
})
