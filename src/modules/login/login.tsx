import React, { useCallback, useState } from 'react'
import { ReduxToProps } from './LoginContainer'
import { useHistory } from 'react-router-dom'

type LoginProps = ReduxToProps

export const Login: React.FC<LoginProps> = ({ loginRequest }) => {
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
