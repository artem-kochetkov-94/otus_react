import type { AnyAction, Dispatch } from 'redux'

const probablity = (n: number) => (!!n && Math.random()) <= n

export const probablityMiddleware = (store: any) => (
  next: Dispatch<AnyAction>,
) => (action: any) => {
  if (action.payload && action.payload.meta && action.payload.meta.probablity) {
    const willHappen = probablity(action.payload.meta.probablity)

    if (willHappen) return next(action)

    return
  }

  return next(action)
}
