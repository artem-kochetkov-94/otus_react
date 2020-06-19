import React, { useCallback, useState } from 'react'
import { ReduxToProps } from './LoginScreenContainer'
import { useHistory } from 'react-router-dom'

type LoginScreenProps = ReduxToProps

export const LoginScreen: React.FC<LoginScreenProps> = ({ loginRequest }) => {
  const [name, setName] = useState('')
  const history = useHistory()
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault()
      loginRequest({ login: name, history })
    },
    [name],
  )
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  )
}
