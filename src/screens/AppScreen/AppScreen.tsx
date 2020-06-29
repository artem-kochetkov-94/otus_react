import React from 'react'
import { TodoListWithData } from 'src/components/TodoList/TodoListWithData'
import { HeaderContainer } from 'src/components'
import { AuthorizedOnlyContainer } from 'src/containers'

export const AppScreen: React.FC<{}> = () => {
  return (
    <AuthorizedOnlyContainer>
      <HeaderContainer />
      <TodoListWithData />
    </AuthorizedOnlyContainer>
  )
}
