import React from 'react'
import { TodoListForm } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'TodoList',
  component: TodoListForm,
}

export const TodoListFormStory: React.FC<{}> = () => {
  return <TodoListForm onCreate={action('Добавить')} />
}
