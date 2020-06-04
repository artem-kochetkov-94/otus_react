import { compose, reduce } from 'src/utils'

interface ParsedQs {
  [key: string]: string
}

const getParamsFromString = (qs: string): string => {
  const qsStartPosition = qs.indexOf('?')
  return qs.slice(qsStartPosition + 1)
}

const splitParams = (qs: string): string[] => qs.split('&')

const parseParam = (accomulator: ParsedQs, param: string): ParsedQs => {
  const [key, value]: string[] = param.split('=')
  accomulator[key] = value
  return accomulator
}

const parseParamReduce = reduce(parseParam, {})

export const parseQsCompose = compose(
  parseParamReduce,
  splitParams,
  getParamsFromString,
)
