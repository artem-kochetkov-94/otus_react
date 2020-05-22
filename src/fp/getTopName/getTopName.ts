import { Team } from './'

export const getTopName = (teams: Team[]): string =>
  teams.reduce((accomulator: Team, team: Team) =>
    team.score > accomulator.score ? team : accomulator,
  ).name
