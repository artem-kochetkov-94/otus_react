import React, { useState } from 'react'
import { TodoListItemData } from 'types/todoListItem'
import { v4 as uuidv4 } from 'uuid'
import { Text } from 'styles/text'
import { Input, FormField, Form, Label } from './styles'
import { Button } from 'styles/button'
import moment from 'moment'
import { executer } from 'types/executer'

interface TodoListFormProps {
  onCreate: (todoItem: TodoListItemData) => void
}

export const TodoListForm: React.FC<TodoListFormProps> = ({ onCreate }) => {
  const today: string = moment().format('YYYY-MM-DD')

  const [title, setTitle] = useState('')
  const [date, setDate] = useState(today)
  const [executer, setExecuter] = useState<executer>('Managment')

  const handleChangeTitle = (e) => setTitle(e.target.value)

  const handleChangeDate = (e) => setDate(e.target.value)

  const handleChangeExecutor = (e) => setExecutor(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodoItem: TodoListItemData = {
      id: uuidv4(),
      title,
      completed: false,
      date,
      executer,
    }

    onCreate(newTodoItem)
    setTitle('')
  }

  return (
    <Form className="todo-list-form" onSubmit={handleSubmit}>
      <Text>Создать задачу</Text>
      <FormField>
        <Label>Название</Label>
        <Input
          value={title}
          onChange={handleChangeTitle}
          required
          name="task-header"
        />
      </FormField>
      <FormField>
        <Label>Срок завершения</Label>
        <Input
          type="date"
          min={today}
          value={date}
          onChange={handleChangeDate}
          required
        />
      </FormField>
      <FormField>
        <Label>Исполнитель</Label>
        <select
          placeholder="Роль"
          required
          defaultValue={executer}
          onChange={handleChangeExecutor}
        >
          <option value="Managment">Managment</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="Design">Design</option>
        </select>
      </FormField>
      <Button
        customType="primary"
        type="submit"
        className="add-task"
        disabled={!title.length}
      >
        Добавить
      </Button>
    </Form>
  )
}
