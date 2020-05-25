import { compose, reduce } from 'src/utils'

interface QsObj {
  [key: string]: string
}

const stickData = (accomulator: string, param: string[]) =>
  (accomulator += `${param[0]}=${param[1]}&`)

const stickDataReduce = reduce(stickData, '?')

const formArray = (qsObj: QsObj) => Object.entries(qsObj)

const cleanQs = (qs: string): string => qs.slice(0, qs.length - 1)

export const createQsCompose = compose(cleanQs, stickDataReduce, formArray)
