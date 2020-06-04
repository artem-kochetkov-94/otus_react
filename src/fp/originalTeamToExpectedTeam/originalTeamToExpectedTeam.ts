import { OriginalTeam, ExpectedTeam } from './'

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam,
): ExpectedTeam => {
  const expectedTeam = {
    ...originalTeam,
    name: 'New York Badgers',
    league: 'Minor',
    roster: 25,
  }
  delete expectedTeam.size

  return expectedTeam
}
