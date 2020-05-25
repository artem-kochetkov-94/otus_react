import { parseQsCompose } from './parseQsCompose'

const qs = '?page=2&pageSize=10&total=205&somethingElse=value'

describe('parseQsCompose', () => {
  it('parseQsCompose works correctly', () => {
    expect(parseQsCompose(qs)).toEqual({
      page: '2',
      pageSize: '10',
      total: '205',
      somethingElse: 'value',
    })
  })
})
