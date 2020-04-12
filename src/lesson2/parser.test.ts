import { parser } from './parser'
import { idText } from 'typescript'

describe('Parser correct cases', () => {
  it('1 + 32', () => {
    expect(parser('1 + 32')).toEqual([1, '+', 32])
  })

  it('5 ! + 25', () => {
    expect(parser('5 ! + 25')).toEqual([5, '!', '+', 25])
  })

  it('11 + 3 * 22', () => {
    expect(parser('11 + 3 * 22')).toEqual([11, '+', 3, '*', 22])
  })

  it('1 + 32 - 2 + 2', () => {
    expect(parser('1 + 32 - 2 + 2')).toEqual([1, '+', 32, '-', 2, '+', 2])
  })
})

describe('Parser invalid cases', () => {
  it('1 + + 33 - 2', () => {
    expect(() => parser('1 + + 33 - 2')).toThrow(TypeError('Unexpected string'))
  })

  it('1 ! 33 - 2', () => {
    expect(() => parser('1 ! 33 - 2')).toThrow(TypeError('Unexpected string'))
  })
})
