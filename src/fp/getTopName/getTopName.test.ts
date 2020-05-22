import { getTopName, Team } from './'

const teams: Team[] = [
  { name: 'Lions', score: 5 },
  { name: 'Tigers', score: 4 },
  { name: 'Bears', score: 6 },
  { name: 'Monkeys', score: 2 },
]

describe('getTopName', () => {
  it('getTopName works correctly', () => {
    expect(getTopName(teams)).toEqual('Bears')
  })
})
