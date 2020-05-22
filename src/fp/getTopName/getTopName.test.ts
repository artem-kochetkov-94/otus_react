import { getTopName, teams } from './'

describe('getTopName', () => {
  it('getTopName works correctly', () => {
    expect(getTopName(teams)).toEqual('Bears')
  })
})
