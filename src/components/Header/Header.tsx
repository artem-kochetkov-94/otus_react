import React from 'react'

export const Header: React.FC<{}> = () => {
  const login = localStorage.getItem('login')

  return (
    <div>
      <div>User: {login}</div>
    </div>
  )
}
