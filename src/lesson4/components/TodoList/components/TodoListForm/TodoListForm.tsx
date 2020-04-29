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

interface FormFieldWrapper {
  label: string
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

  const FormFieldWrapper: React.FC<FormFieldWrapper> = ({
    label,
    children,
  }) => {
    return (
      <FormField>
        {label && <Label>{label}</Label>}
        {children}
      </FormField>
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Создать задачу</Text>
      <FormFieldWrapper label="Название">
        <Input
          value={title}
          onChange={handleChangeTitle}
          required
          name="task-header"
        />
      </FormFieldWrapper>
      <FormFieldWrapper label="Срок завершения">
        <Input
          type="date"
          min={today}
          value={date}
          onChange={handleChangeDate}
          required
        />
      </FormFieldWrapper>
      <FormFieldWrapper label="Исполнитель">
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
      </FormFieldWrapper>
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
