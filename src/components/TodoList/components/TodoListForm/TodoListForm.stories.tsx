import React from 'react'
import { TodoListFormContainer as TodoListForm } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'TodoList',
  component: TodoListForm,
}

export const TodoListFormStory: React.FC<{}> = () => {
  return <TodoListForm onSubmit={action('Добавить')} />
}
