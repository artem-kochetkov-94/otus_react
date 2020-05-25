import { createQsCompose } from './'

export const qsObj: { [key: string]: string } = {
  page: '2',
  pageSize: '10',
  total: '205',
  somethingElse: 'value',
}

describe('createQsCompose', () => {
  it('createQsCompose works correctly', () => {
    expect(createQsCompose(qsObj)).toEqual(
      '?page=2&pageSize=10&total=205&somethingElse=value',
    )
  })
})
