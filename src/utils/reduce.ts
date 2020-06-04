export const reduce = (cb: Function, defaultValue?: any) => (arr: any[]) => {
  if (defaultValue) return arr.reduce(cb, defaultValue)

  return arr.reduce(cb)
}
