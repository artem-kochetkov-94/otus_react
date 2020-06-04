export * from './deepOriginalTeamToExpectedTeam'

export interface Team {
  name: string
  captain: {
    name: string
    age: number
  }
}
