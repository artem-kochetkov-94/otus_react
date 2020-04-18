import React, { useState } from 'react'
import { TodoListItemData } from '../TodoList'
import { v4 as uuidv4 } from 'uuid'

interface TodoListFormProps {
  onCreate: (todoItem: TodoListItemData) => void
}

export const TodoListForm: React.FC<TodoListFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState<string>('')

  const handleChangeTitle = (e) => setTitle(e.target.value)

  const createTodoItem = () => {
    const newTodoItem: TodoListItemData = {
      id: uuidv4(),
      title,
      isCompleted: false,
    }

    onCreate(newTodoItem)
    setTitle('')
  }

  return (
    <div>
      <input value={title} onChange={handleChangeTitle} />
      <button onClick={createTodoItem}>Добавить</button>
    </div>
  )
}
