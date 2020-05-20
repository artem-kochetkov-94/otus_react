import React from 'react'
import { TodoListWithData } from 'src/components/TodoList/TodoListWithData'
import { authorizedOnlyHoc } from 'src/hocs'
import { Header } from 'src/components'

export const AppScreen: React.FC<{}> = authorizedOnlyHoc(() => {
  return (
    <>
      <Header />
      <TodoListWithData />
    </>
  )
})
