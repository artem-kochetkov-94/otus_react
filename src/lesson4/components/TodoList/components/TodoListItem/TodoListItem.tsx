import React from 'react'
import { TodoListItemData } from 'types/todoListItem'
import { Button } from 'src/components/Button'
import { Text } from 'styles/text'
import { Wrapper, TaskCompleted } from './styles'

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
    <Wrapper>
      <Text className="task-title">{title}</Text>
      {isCompleted ? (
        <TaskCompleted>Выполнено</TaskCompleted>
      ) : (
        <Button customType="primary" onClick={onDone} className="close-task">
          Закрыть задачу
        </Button>
      )}
      <Button customType="dangerous" onClick={onRemove} className="remove-task">
        Удалить задачу
      </Button>
    </Wrapper>
  )
}
