export * from './originalTeamToExpectedTeam'

export interface OriginalTeam {
  size: number
  name: string
  league: string
}

export interface ExpectedTeam {
  name: string
  league: string
  roster: number
}
