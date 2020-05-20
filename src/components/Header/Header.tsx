import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from 'src/api/auth'

export const Header: React.FC<{}> = () => {
  const login = localStorage.getItem('login')
  const history = useHistory()
  const onSubmit = useCallback(async (ev) => {
    ev.preventDefault()
    await logout()
    history.push(`/login`)
  }, [])

  return (
    <div>
      <div>User: {login}</div>
      <form onSubmit={onSubmit}>
        <button type="submit">Выйти</button>
      </form>
    </div>
  )
}
