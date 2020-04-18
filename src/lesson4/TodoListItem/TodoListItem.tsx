import React from 'react'
import { TodoListItemData } from '../TodoList'

interface TodoListItemProps extends TodoListItemData {
  onDone: () => void
  onRemove: () => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  title,
  isCompleted,
  onDone,
  onRemove,
}) => {
  return (
    <div>
      <div>{title}</div>
      {isCompleted ? (
        <div>Выполнено</div>
      ) : (
        <button onClick={onDone}>Закрыть задачу</button>
      )}
      <button onClick={onRemove}>Удалить задачу</button>
    </div>
  )
}
