import { numbersToWords } from 'src/utils/numbersToWords'

export const originalArrayToExpectedArray = (
  originalArray: number[],
): (number | string)[] => {
  const resultArray = originalArray.map((item) => ++item)
  resultArray[0] = numbersToWords(resultArray[0]).trim()
  return resultArray
}
