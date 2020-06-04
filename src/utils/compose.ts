export const compose = (...fns: Function[]) => (...args: any[]) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0]
