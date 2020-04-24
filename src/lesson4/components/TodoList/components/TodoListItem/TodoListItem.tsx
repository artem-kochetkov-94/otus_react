import React from 'react'
import { TodoListItemData } from 'types/todoListItem'

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
      <div className="task-title">{title}</div>
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
