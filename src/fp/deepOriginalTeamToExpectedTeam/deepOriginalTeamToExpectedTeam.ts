import { Team } from './'

export const deepOriginalTeamToExpectedTeam = (originalTeam: Team): Team => {
  return {
    ...originalTeam,
    captain: {
      ...originalTeam.captain,
      age: 28,
    },
  }
}
