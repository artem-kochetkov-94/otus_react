import type { AnyAction, Dispatch } from 'redux'
import { AppState } from 'rdx/index'

interface ThunkMiddlewareProps {
  dispatch: Dispatch
  getState(): AppState
}

export const thunkMiddleware = ({
  dispatch,
  getState,
}: ThunkMiddlewareProps) => {
  return (next: Dispatch<AnyAction>) => (action: any) =>
    typeof action === 'function' ? action(dispatch, getState) : next(action)
}
