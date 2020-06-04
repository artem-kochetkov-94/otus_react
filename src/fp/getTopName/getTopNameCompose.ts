import { Team } from './'
import { compose, reduce } from 'src/utils'

const getTopTeam = (accomulator: Team, team: Team) =>
  team.score > accomulator.score ? team : accomulator

const getTopTeamName = (team: Team): string => team.name

export const getTopNameCompose = compose(getTopTeamName, reduce(getTopTeam))
