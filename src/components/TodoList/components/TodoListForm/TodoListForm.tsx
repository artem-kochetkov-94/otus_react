import React from 'react'
import { Text } from 'styles/text'
import { Input, FormField, Form, Label } from './styles'
import { Button } from 'styles/button'

interface TodoListFormProps {
  today: string
  title: string
  date: string
  executer: string
  handleChange: (e: React.ChangeEvent) => void
  handleSubmit: (e: React.FormEvent) => void
}

interface FormFieldWrapper {
  label: string
}

const FormFieldWrapper: React.FC<FormFieldWrapper> = ({ label, children }) => {
  return (
    <FormField>
      {label && <Label>{label}</Label>}
      {children}
    </FormField>
  )
}

export const TodoListForm: React.FC<TodoListFormProps> = ({
  today,
  title,
  date,
  executer,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Text>Создать задачу</Text>
      <FormFieldWrapper label="Название">
        <Input
          value={title}
          onChange={handleChange}
          required
          name="task-header"
        />
      </FormFieldWrapper>
      <FormFieldWrapper label="Срок завершения">
        <Input
          type="date"
          min={today}
          value={date}
          onChange={handleChange}
          required
          name="task-date"
        />
      </FormFieldWrapper>
      <FormFieldWrapper label="Исполнитель">
        <select
          placeholder="Роль"
          required
          defaultValue={executer}
          onChange={handleChange}
          name="task-executer"
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
