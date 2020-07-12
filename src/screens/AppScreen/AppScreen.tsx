import React from 'react'
import { TodoListWithData } from 'src/components/TodoList/TodoListWithData'
import { Logout } from 'src/modules/login'
import { AuthorizedOnlyContainer } from 'src/modules/login'

export const AppScreen: React.FC<{}> = () => {
  return (
    <AuthorizedOnlyContainer>
      <Logout />
      <TodoListWithData />
    </AuthorizedOnlyContainer>
  )
}
