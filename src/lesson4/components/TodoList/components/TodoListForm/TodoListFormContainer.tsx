import React, { useState } from 'react'
import { TodoListItemData } from 'types/todoListItem'
import { v4 as uuidv4 } from 'uuid'
import { FormField, Label } from './styles'
import moment from 'moment'
import { executer } from 'types/executer'
import { TodoListForm } from './TodoListForm'

interface TodoListFormProps {
  onSubmit: (todoItem: TodoListItemData) => void
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

export const TodoListFormContainer: React.FC<TodoListFormProps> = ({
  onSubmit,
}) => {
  const today: string = moment().format('YYYY-MM-DD')

  const [title, setTitle] = useState('')
  const [date, setDate] = useState(today)
  const [executer, setExecuter] = useState<executer>('Managment')

  const handleChange = (e: React.ChangeEvent) => {
    const { name } = e.target

    switch (name) {
      case 'task-header':
        setTitle((e.target as HTMLInputElement).value)
        break
      case 'task-date':
        setDate((e.target as HTMLInputElement).value)
        break
      case 'task-executer':
        setExecuter(e.target.value)
        break
      default:
        break
    }
  }

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

  const todoListFormProps = {
    today,
    title,
    setTitle,
    date,
    setDate,
    executer,
    setExecuter,
    handleChange,
    handleSubmit,
  }

  return <TodoListForm {...todoListFormProps} />
}
