import React from 'react'

interface Props {
  username: string
}

export const HelloWorld: React.FC<Props> = ({ username }) => (
  <div>Hello world, {username}</div>
)
