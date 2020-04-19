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
        <div className="task-completed">Выполнено</div>
      ) : (
        <button onClick={onDone} className="close-task">
          Закрыть задачу
        </button>
      )}
      <button onClick={onRemove} className="remove-task">
        Удалить задачу
      </button>
    </div>
  )
}
