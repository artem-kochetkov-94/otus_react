import React, { useCallback } from 'react'
import { ReduxToProps } from './HeaderContainer'

type HeaderProps = ReduxToProps

export const Header: React.FC<HeaderProps> = ({ user, logoutRequest }) => {
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
