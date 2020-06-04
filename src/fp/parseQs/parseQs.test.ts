import { parseQs } from './parseQs'

const qs = '?page=2&pageSize=10&total=205&somethingElse=value'

describe('parseQs', () => {
  it('parseQs works correctly', () => {
    expect(parseQs(qs)).toEqual({
      page: '2',
      pageSize: '10',
      total: '205',
      somethingElse: 'value',
    })
  })
})
