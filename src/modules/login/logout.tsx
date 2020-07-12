import React, { useCallback } from 'react'
import { ReduxToProps } from './logoutContainer'

type LogoutProps = ReduxToProps

export const Logout: React.FC<LogoutProps> = ({ user, logoutRequest }) => {
  const onSubmit = useCallback(async (ev) => {
    ev.preventDefault()
    logoutRequest()
  }, [])

  return (
    <div>
      <div>User: {user?.login}</div>
      <form onSubmit={onSubmit}>
        <button type="submit">Выйти</button>
      </form>
    </div>
  )
}
