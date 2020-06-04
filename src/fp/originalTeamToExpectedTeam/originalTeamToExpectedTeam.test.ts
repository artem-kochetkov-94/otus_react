import { originalTeamToExpectedTeam } from './'

const originalTeam = {
  size: 15,
  name: 'Tampa Bay Roosters',
  league: 'Minor',
}

const expectedTeam = {
  name: 'New York Badgers',
  league: 'Minor',
  roster: 25,
}

describe('originalTeamToExpectedTeam', () => {
  it('originalTeamToExpectedTeam works correctly', () => {
    const resultTeam = originalTeamToExpectedTeam(originalTeam)

    expect(resultTeam).toEqual(expectedTeam)
    expect(originalTeam).toEqual({
      size: 15,
      name: 'Tampa Bay Roosters',
      league: 'Minor',
    })
  })
})
