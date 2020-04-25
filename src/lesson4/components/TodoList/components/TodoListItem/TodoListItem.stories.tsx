import React from 'react'
import { TodoListItem } from './'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
  title: 'TodoList',
  component: TodoListItem,
  decorators: [withKnobs],
}

export const TodoListItemStory: React.FC<{}> = () => {
  return (
    <TodoListItem
      id={text('id', 'test')}
      title={text('title', 'test')}
      completed={boolean('completed', false)}
      onDone={action('Закрыть задачу')}
      onRemove={action('Удалить задачу')}
    />
  )
}
