import { createQs, qsObj } from './'

describe('createQs', () => {
  it('createQs works correctly', () => {
    expect(createQs(qsObj)).toEqual(
      '?page=2&pageSize=10&total=205&somethingElse=value',
    )
  })
})
