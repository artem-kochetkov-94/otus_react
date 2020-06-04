import { createQs } from './'

export const qsObj: { [key: string]: string } = {
  page: '2',
  pageSize: '10',
  total: '205',
  somethingElse: 'value',
}

describe('createQs', () => {
  it('createQs works correctly', () => {
    expect(createQs(qsObj)).toEqual(
      '?page=2&pageSize=10&total=205&somethingElse=value',
    )
  })
})
