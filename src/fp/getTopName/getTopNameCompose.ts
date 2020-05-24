import { Team } from './'
import { compose } from 'ramda'

const getTopTeam = (teams: Team[]): Team =>
  teams.reduce((accomulator: Team, team: Team) =>
    team.score > accomulator.score ? team : accomulator,
  )

const getTopTeamName = (team: Team): string => team.name

export const getTopNameCompose = compose(getTopTeamName, getTopTeam)
