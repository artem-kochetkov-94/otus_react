import { getTopNameCompose, Team } from './'

const teams: Team[] = [
  { name: 'Lions', score: 5 },
  { name: 'Tigers', score: 4 },
  { name: 'Bears', score: 6 },
  { name: 'Monkeys', score: 2 },
]

describe('getTopNameCompose', () => {
  it('getTopNameCompose works correctly', () => {
    expect(getTopNameCompose(teams)).toEqual('Bears')
  })
})
