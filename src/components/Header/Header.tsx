import React, { useCallback } from 'react'
import { ReduxToProps } from './HeaderContainer'
import { useHistory } from 'react-router-dom'

type HeaderProps = ReduxToProps

export const Header: React.FC<HeaderProps> = ({ user, logoutRequest }) => {
  const history = useHistory()

  const onSubmit = useCallback(async (ev) => {
    ev.preventDefault()
    logoutRequest({
      history,
    })
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
