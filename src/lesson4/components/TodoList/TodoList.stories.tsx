import React from 'react'
import { TodoList } from './'
import { withKnobs, object } from '@storybook/addon-knobs'

export default {
  title: 'TodoList',
  decorators: [withKnobs],
}

export const TodoListStory: React.FC<{}> = () => {
  const todoList = [
    {
      id: '1',
      title: 'task 1',
      completed: false,
    },
  ]

  return <TodoList todoList={object('todoList', todoList)} />
}
