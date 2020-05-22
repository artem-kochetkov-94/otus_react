interface ParsedQs {
  [key: string]: string
}

export const parseQs = (qs: string): ParsedQs => {
  const qsStartPosition = qs.indexOf('?')

  return qs
    .slice(qsStartPosition + 1)
    .split('&')
    .reduce((accomulator: ParsedQs, param: string): ParsedQs => {
      const [key, value]: string[] = param.split('=')
      accomulator[key] = value
      return accomulator
    }, {})
}
