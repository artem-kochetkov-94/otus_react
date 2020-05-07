import React, { useState, useEffect } from 'react'
import { TodoListItemData } from 'types/todoListItem'
import { TodoList } from './TodoList'

interface TodoListContainerProps {
  todoList: TodoListItemData[]
}

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 20

export const TodoListContainer: React.FC<TodoListContainerProps> = (props) => {
  const [todoList, setTodoList] = useState<TodoListItemData[]>(props.todoList)
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)

  const offset = (page - 1) * pageSize
  const amount = todoList.length

  useEffect(() => {
    setTodoList(props.todoList)
  }, [props.todoList])

  const createTodoItem = (todoItem: TodoListItemData) => {
    setTodoList([...todoList, todoItem])
  }

  const completeTask = (id: string) => {
    const newTodoList = todoList.map((item) =>
      item.id === id
        ? {
            ...item,
            completed: true,
          }
        : item,
    )

    setTodoList([...newTodoList])
  }

  const removeTask = (id: string) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }

  const handlePageSizeChange = (e: React.ChangeEvent) => {
    setPageSize(e.target.value)
    setPage(DEFAULT_PAGE)
  }

  const todoListProps = {
    todoList: todoList.slice(offset, offset + pageSize),
    createTodoItem: createTodoItem,
    completeTask,
    removeTask,
    amount,
    pageSize,
    page,
    setPage,
    handlePageSizeChange,
  }

  return <TodoList {...todoListProps} />
}
