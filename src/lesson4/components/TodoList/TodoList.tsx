import React, { useState, useEffect } from 'react'
import { TodoListItem, TodoListForm } from './'
import { TodoListItemData } from 'types/todoListItem'

interface TodoListProps {
  todoList: TodoListItemData[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const [todoList, setTodoList] = useState<TodoListItemData[]>(props.todoList)

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

  return (
    <div>
      {todoList.length ? (
        todoList.map((listItem: TodoListItemData) => (
          <TodoListItem
            key={listItem.id}
            {...listItem}
            onDone={completeTask.bind(null, listItem.id)}
            onRemove={removeTask.bind(null, listItem.id)}
          />
        ))
      ) : (
        <p className="todo-list-empty">Спискок задач пуст</p>
      )}
      <TodoListForm onCreate={createTodoItem} />
    </div>
  )
}
