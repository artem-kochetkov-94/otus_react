import React, { useState } from 'react'
import { TodoListItemData } from 'types/todoListItem'
import { v4 as uuidv4 } from 'uuid'
import { Text } from 'styles/text'
import { Input, FormField, Form, Label } from './styles'
import { Button } from 'styles/button'
import moment from 'moment'
import { executer } from 'types/executer'

interface TodoListFormProps {
  onSubmit: (todoItem: TodoListItemData) => void
}

export const TodoListForm: React.FC<TodoListFormProps> = ({ onSubmit }) => {
  const today: string = moment().format('YYYY-MM-DD')

  const [title, setTitle] = useState('')
  const [date, setDate] = useState(today)
  const [executer, setExecuter] = useState<executer>('Managment')

  const handleChangeTitle = (e: React.ChangeEvent) =>
    setTitle((e.target as HTMLInputElement).value)

  const handleChangeDate = (e: React.ChangeEvent) =>
    setDate((e.target as HTMLInputElement).value)

  const handleChangeExecutor = (e: React.ChangeEvent) =>
    setExecuter(e.target.value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTodoItem: TodoListItemData = {
      id: uuidv4(),
      title,
      completed: false,
      date,
      executer,
    }

    onSubmit(newTodoItem)
    setTitle('')
  }

  return (
    <Form onSubmit={handleSubmit}>
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
