import { originalArrayToExpectedArray } from './'

const originalArray = [1, 2, 3, 4]

const expectedArray = ['two', 3, 4, 5]

const result = originalArrayToExpectedArray(originalArray)
console.log(result)

describe('originalArrayToExpectedArray', () => {
  it('originalArrayToExpectedArray works correctly', () => {
    const resultArray = originalArrayToExpectedArray(originalArray)

    expect(resultArray).toEqual(expectedArray)
    expect(originalArray).toEqual([1, 2, 3, 4])
  })
})
