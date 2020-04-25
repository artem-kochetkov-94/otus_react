import React, { useState } from 'react'
import { TodoListItemData } from 'types/todoListItem'
import { v4 as uuidv4 } from 'uuid'
import { Text } from 'styles/text'
import { Input } from './styles'
import { Button } from 'src/components/Button'

interface TodoListFormProps {
  onCreate: (todoItem: TodoListItemData) => void
}

export const TodoListForm: React.FC<TodoListFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  const handleChangeTitle = (e) => setTitle(e.target.value)

  const createTodoItem = () => {
    const newTodoItem: TodoListItemData = {
      id: uuidv4(),
      title,
      completed: false,
    }

    onCreate(newTodoItem)
    setTitle('')
  }

  return (
    <div>
      <Text>Создать задачу</Text>
      <Input value={title} onChange={handleChangeTitle} />
      <Button
        customType="primary"
        onClick={createTodoItem}
        className="add-task"
        disabled={!title.length}
      >
        Добавить
      </Button>
    </div>
  )
}
