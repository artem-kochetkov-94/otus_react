import React from 'react'
import { TodoList } from './'

export default {
  title: 'TodoList',
  component: TodoList,
}

export const TodoListStory: React.FC<{}> = () => {
  const todoList = [
    {
      id: '1',
      title: 'task 1',
      isCompleted: false,
    },
  ]

  return <TodoList todoList={todoList} />
}
