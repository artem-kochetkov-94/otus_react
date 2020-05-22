export const createQs = (qsObj: { [key: string]: string }) => {
  const qs = Object.keys(qsObj).reduce(
    (accomulator, key) => (accomulator += `${key}=${qsObj[key]}&`),
    '?',
  )
  return qs.slice(0, qs.length - 1)
}
