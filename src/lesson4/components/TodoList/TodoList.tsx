import React, { useState, useEffect } from 'react'
import { TodoListItem, TodoListForm } from './'
import { TodoListItemData } from 'types/todoListItem'
import { ButtonPage, Pagination } from './styles'

interface TodoListProps {
  todoList: TodoListItemData[]
}

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 20

export const TodoList: React.FC<TodoListProps> = (props) => {
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

  const handleInputChange = (e: React.ChangeEvent) => {
    setPageSize(e.target.value)
    setPage(DEFAULT_PAGE)
  }

  const getPagination = () => {
    const buttons = []

    const totalPage = (amount + (pageSize - 1)) / pageSize

    for (let i = 1; i <= totalPage; i++) {
      buttons.push(
        <ButtonPage key={i} isActive={page === i} onClick={() => setPage(i)}>
          {i}
        </ButtonPage>,
      )
    }

    return (
      <div>
        <p>
          pageSize:{' '}
          <input
            value={pageSize}
            onChange={handleInputChange}
            type="number"
            min={5}
          />
        </p>
        <Pagination>{buttons}</Pagination>
      </div>
    )
  }

  const getTodoList = () => {
    if (!todoList.length) {
      return <p className="todo-list-empty">Спискок задач пуст</p>
    }

    return todoList
      .slice(offset, offset + pageSize)
      .map((listItem: TodoListItemData) => (
        <TodoListItem
          key={listItem.id}
          {...listItem}
          onDone={completeTask.bind(null, listItem.id)}
          onRemove={removeTask.bind(null, listItem.id)}
        />
      ))
  }

  return (
    <div>
      <TodoListForm onSubmit={createTodoItem} />
      {getPagination()}
      {getTodoList()}
    </div>
  )
}
