import { isNumber } from './helpers'
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from './mathOperators'

const [UNARY] = mathPriorities

export type ParsedLineType = (number | string)[]

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(' ')

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1]

    const isValidNumberPush =
      !isNumber(prevItem) &&
      mathOperatorsPriorities[prevItem] !== UNARY &&
      isNumber(item)

    const isValidOperatorPush =
      (isNumber(prevItem) &&
        !isNumber(item) &&
        mathOperators.hasOwnProperty(item)) ||
      (mathOperatorsPriorities[prevItem] === UNARY &&
        mathOperators.hasOwnProperty(item))

    if (isValidNumberPush) {
      result.push(Number(item))
    } else if (isValidOperatorPush) {
      result.push(item)
    } else {
      throw new TypeError('Unexpected string')
    }
    return result
  }, [])
}
