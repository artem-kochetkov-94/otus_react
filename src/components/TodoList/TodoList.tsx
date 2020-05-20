import React from 'react'
import { TodoListItem, TodoListFormContainer as TodoListForm } from './'
import { TodoListItemData } from 'types/todoListItem'
import { Pagination } from 'src/components'

interface TodoListProps {
  todoList: TodoListItemData[]
  createTodoItem: (todoItem: TodoListItemData) => void
  completeTask: (id: string) => void
  removeTask: (id: string) => void
  amount: number
  pageSize: number
  page: number
  setPage: (page: number) => void
  onPageSizeChange: (value: string) => void
}

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const {
    todoList,
    createTodoItem,
    completeTask,
    removeTask,
    ...paginationProps
  } = props

  const getTodoList = () => {
    if (!todoList.length) {
      return <p className="todo-list-empty">Спискок задач пуст</p>
    }

    return todoList.map((listItem: TodoListItemData) => (
      <TodoListItem
        key={listItem.id}
        {...listItem}
        onDone={() => completeTask(listItem.id)}
        onRemove={() => removeTask(listItem.id)}
      />
    ))
  }

  return (
    <div>
      <TodoListForm onSubmit={createTodoItem} />
      <Pagination {...paginationProps} />
      {getTodoList()}
    </div>
  )
}
